import {
  formatMobileNumber,
  groupCallHistory,
  getDateAndTime,
  sortActivityDetails,
  determineIfGroupKey,
} from "../utils";

describe("Utility Functions", () => {
  describe("formatMobileNumber", () => {
    test("formats North American numbers correctly", () => {
      expect(formatMobileNumber("18742869541")).toBe("+1 874 286 9541");
    });

    test("formats French numbers correctly", () => {
      expect(formatMobileNumber("33645135391")).toBe("+33 6 45 13 53 91");
    });

    test("returns original number if length is less than 10", () => {
      expect(formatMobileNumber("123456")).toBe("123456");
    });

    test("removes non-numeric characters", () => {
      expect(formatMobileNumber("+1 (874) 286-9541")).toBe("+1 874 286 9541");
    });

    test("formats an unknown region correctly", () => {
      expect(formatMobileNumber("919876543210")).toBe("+91 98 76 54 3210");
    });

    test("handles empty input", () => {
      expect(formatMobileNumber("")).toBe("");
    });

    test("handles non-string input", () => {
      expect(formatMobileNumber(null)).toBe("");
      expect(formatMobileNumber(undefined)).toBe("");
    });
  });

  describe("groupCallHistory", () => {
    test("groups call history by key", () => {
      const callData = [
        {
          created_at: "2025-03-08T10:00:00Z",
          from: "12345",
          to: "67890",
          direction: "outbound",
          call_type: "missed",
          is_archived: false,
        },
        {
          created_at: "2025-03-08T11:00:00Z",
          from: "12345",
          to: "67890",
          direction: "outbound",
          call_type: "missed",
          is_archived: false,
        },
      ];

      const grouped = groupCallHistory(callData, 1);

      expect(grouped.length).toBe(1);
      expect(grouped[0].call_count).toBe(2);
    });

    test("filters archived calls based on tab selection", () => {
      const callData = [
        { created_at: "2025-03-08T10:00:00Z", is_archived: true },
        { created_at: "2025-03-08T11:00:00Z", is_archived: false },
      ];

      expect(groupCallHistory(callData, 2).length).toBe(1);
      expect(groupCallHistory(callData, 1).length).toBe(1);
    });

    test("returns an empty array when no calls are present", () => {
      expect(groupCallHistory([], 1)).toEqual([]);
    });

    test("handles missing call properties gracefully", () => {
      const callData = [{ created_at: "2025-03-08T10:00:00Z" }];
      expect(groupCallHistory(callData, 1)).toHaveLength(1);
    });

    test("sorts grouped calls by latest timestamp in descending order", () => {
      const callData = [
        {
          created_at: "2025-03-08T09:00:00Z",
          from: "12345",
          to: "67890",
          direction: "outbound",
          call_type: "missed",
          is_archived: false,
        },
        {
          created_at: "2025-03-08T11:00:00Z",
          from: "12345",
          to: "67890",
          direction: "outbound",
          call_type: "missed",
          is_archived: false,
        },
        {
          created_at: "2025-03-08T10:00:00Z",
          from: "11111",
          to: "22222",
          direction: "inbound",
          call_type: "answered",
          is_archived: false,
        },
      ];

      const grouped = groupCallHistory(callData, 1);

      expect(grouped.length).toBe(2);
      expect(grouped[0].latest_time).toBe("2025-03-08T11:00:00Z");
      expect(grouped[1].latest_time).toBe("2025-03-08T10:00:00Z");
    });
  });

  describe("getDateAndTime", () => {
    test("returns correct date and time", () => {
      const result = getDateAndTime("2025-03-08T14:30:00Z");
      expect(result.date).toBe("2025-03-08");
      expect(result.time).toMatch(/\d{1,2}:\d{2} (AM|PM)/);
    });

    test("handles invalid date inputs", () => {
      expect(getDateAndTime(null)).toEqual({
        date: "Invalid Date",
        time: "Invalid Date",
        timestamp: NaN,
      });
    });

    test("handles timestamp input correctly", () => {
      const timestamp = 1710000000000;
      const result = getDateAndTime(timestamp);
      expect(result.date).toMatch(/\d{4}-\d{2}-\d{2}/);
      expect(result.time).toMatch(/\d{1,2}:\d{2} (AM|PM)/);
    });
  });

  describe("sortActivityDetails", () => {
    test("sorts activities by date in descending order", () => {
      const activities = [
        { created_at: "2025-03-08T14:00:00Z" },
        { created_at: "2025-03-08T15:00:00Z" },
      ];
      const sorted = sortActivityDetails(activities);
      expect(sorted[0].created_at).toBe("2025-03-08T15:00:00Z");
    });

    test("handles empty activity list", () => {
      expect(sortActivityDetails([])).toEqual([]);
    });

    test("handles missing created_at field", () => {
      const activities = [{ some_other_field: "test" }];
      expect(sortActivityDetails(activities)).toEqual(activities);
    });
  });

  describe("determineIfGroupKey", () => {
    test("returns true for valid group keys", () => {
      expect(determineIfGroupKey("GroupKey_2025-03-08-12345-67890")).toBe(true);
    });

    test("returns false for invalid group keys", () => {
      expect(determineIfGroupKey("SomeOtherKey_2025-03-08")).toBe(false);
    });

    test("handles empty string input", () => {
      expect(determineIfGroupKey("")).toBe(false);
    });

    test("handles null or undefined input", () => {
      expect(determineIfGroupKey(null)).toBe(false);
      expect(determineIfGroupKey(undefined)).toBe(false);
    });
  });
});
