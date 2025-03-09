import React from "react";
import DateSeparator from "./DateSeparator";
import CallNumber from "./CallNumber";
import { useCall } from "@contexts/ActivityProvider";
import { Wrapper } from "./ActivityItem.styles";
import { sortActivityDetails } from "@utils";
import { useLocation } from "react-router-dom";

function ActivityItem({ passedkey = "" }) {
  const { groupedData, selectedTab } = useCall();
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const callDetail = groupedData.find((item) => item?.id === passedkey);

  const { date } = callDetail || {};
  const sortedData = sortActivityDetails(
    selectedTab === 0 && isMainPage ? [callDetail] : callDetail?.callList || []
  );

  return (
    sortedData.length > 0 && (
      <Wrapper>
        <DateSeparator date={date} />
        {sortedData.map((item) => (
          <React.Fragment key={item.id}>
            <CallNumber callDetail={item} />
            <br />
          </React.Fragment>
        ))}
      </Wrapper>
    )
  );
}

export default ActivityItem;
