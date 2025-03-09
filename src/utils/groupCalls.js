import { getDateAndTime } from ".";
export const groupCallHistory = (callData, selectedTab) => {
  const groupedData = {};

  callData
    .filter(({ is_archived }) =>
      selectedTab === 2 ? is_archived : !is_archived
    )
    .forEach((call) => {
      const { date, timestamp } = getDateAndTime(call.created_at);

      const key = `GroupKey_${date}-${call.from}-${call.to}-${call.direction}-${call.call_type}`;

      if (!groupedData[key]) {
        groupedData[key] = {
          date,
          from: call.from,
          to: call.to,
          direction: call.direction,
          call_type: call.call_type,
          call_count: 0,
          latest_time: call.created_at,
          id: key,
          latest_timestamp: timestamp,
          callList: [call],
        };
      } else {
        groupedData[key].callList = [...groupedData[key].callList, call];
      }
      groupedData[key].call_count += 1;

      if (timestamp > groupedData[key].latest_timestamp) {
        groupedData[key].latest_time = call.created_at;
        groupedData[key].latest_timestamp = timestamp;
      }
    });

  return Object.values(groupedData).sort(
    (a, b) => b.latest_timestamp - a.latest_timestamp
  );
};
