import React from "react";
import ActivityItem from "./ActivityItem/ActivityItem";
import { Wrapper } from "./ActivityFeed.styles";
import { useCall } from "@contexts/ActivityProvider";

function ActivityFeed() {
  const { groupedData } = useCall();

  return (
    <Wrapper>
      {groupedData?.map((callDetail, index) => (
        <ActivityItem key={callDetail.id} passedkey={callDetail.id || index} />
      ))}
    </Wrapper>
  );
}

export default ActivityFeed;
