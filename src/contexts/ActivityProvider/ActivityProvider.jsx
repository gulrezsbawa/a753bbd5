import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useMemo,
} from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { groupCallHistory } from "@utils";
import { useSnackbar } from "../SnackbarProvider/SnackbarProvider";

const CallContext = createContext(null);

export const useCall = () => {
  const context = useContext(CallContext);
  if (!context) {
    throw new Error("useCall must be used within an ActivityProvider");
  }
  return context;
};

export const ActivityProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const queryClient = useQueryClient();
  const { showSnackbar } = useSnackbar();

  const BASE_URL = process.env.BASE_URL;
  const ACTIVITIES_URL = `${BASE_URL}/activities`;

  const fetchActivities = async () => {
    try {
      const res = await fetch(ACTIVITIES_URL);
      const text = await res.text();
      return JSON.parse(text);
    } catch (error) {
      console.error("Invalid JSON response:", error);
      throw new Error("Failed to fetch activities");
    }
  };

  const fetchPatchRequest = async (url, body) => {
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return true;
    } catch (error) {
      console.error("Patch request failed:", error);
      throw error;
    }
  };

  const { fetchStatus, isError: activitiesError } = useQuery(
    ["activities"],
    fetchActivities,
    {
      onSuccess: setCall,
    }
  );

  const isActivitiesLoading = fetchStatus === "fetching";
  const groupedData = useMemo(
    () => groupCallHistory(call, selectedTab),
    [call, selectedTab]
  );

  const archiveOrRestoreMutation = useMutation(
    async ({ id, isGroup }) => {
      const activityOrActivitiesList = (isGroup ? groupedData : call).find(
        ({ id: key }) => key === id
      );
      if (!activityOrActivitiesList) throw new Error("Activity not found");

      const callList = isGroup
        ? activityOrActivitiesList?.callList || []
        : [activityOrActivitiesList];
      const body = { is_archived: selectedTab !== 2 };

      return Promise.allSettled(
        callList.map(({ id }) =>
          fetchPatchRequest(`${ACTIVITIES_URL}/${id}`, body)
        )
      );
    },
    {
      onSuccess: () => {
        const action = selectedTab !== 2 ? "archived" : "restored";
        showSnackbar(
          `Call${selectedTab === 0 ? "s" : ""} ${action} successfully.`,
          "success"
        );
        queryClient.invalidateQueries(["activities"]);
      },
    }
  );

  const refreshActivities = useCallback(() => {
    queryClient.invalidateQueries(["activities"]);
  }, [queryClient]);

  const archiveOrRestoreAllMutation = useMutation(
    async () => {
      const isArchiving = selectedTab !== 2;
      const body = { is_archived: isArchiving };

      const callsToModify = call.filter(
        ({ is_archived }) => isArchiving !== is_archived
      );
      if (callsToModify.length === 0) return;

      if (!isArchiving) {
        await fetchPatchRequest(`${BASE_URL}/reset`, {});
      } else {
        const results = await Promise.allSettled(
          callsToModify.map(({ id }) =>
            fetchPatchRequest(`${ACTIVITIES_URL}/${id}`, body)
          )
        );
        console.log({ results });
        if (results.some(({ status }) => status === "rejected")) {
          throw new Error("Some activities failed to update.");
        }
      }
    },
    {
      onSuccess: () => {
        const action = selectedTab !== 2 ? "archived" : "restored";
        showSnackbar(`Calls ${action} successfully.`, "success");
        queryClient.invalidateQueries(["activities"]);
      },
      onError: () => {
        showSnackbar("Some calls failed to update.", "error");
      },
    }
  );

  const handleArchiveOrRestoreAll = useCallback(() => {
    archiveOrRestoreAllMutation.mutate();
  }, [archiveOrRestoreAllMutation]);

  return (
    <CallContext.Provider
      value={{
        call,
        groupedData,
        setCall,
        selectedTab,
        setSelectedTab,
        handleArchiveOrRestoreAll,
        isActivitiesLoading,
        activitiesError,
        refreshActivities,
        archiveOrRestoreMutation,
      }}
    >
      {children}
    </CallContext.Provider>
  );
};
