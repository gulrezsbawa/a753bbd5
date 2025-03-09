import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCall } from "@contexts/ActivityProvider";
import { Wrapper } from "./ActivityHistory.styles";
import ActivityItem from "../MainContent/ActivityFeed/ActivityItem";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ActivityHistory() {
  const param = useParams();
  const navigate = useNavigate();

  const { id = 0 } = param || {};
  const { groupedData } = useCall();

  const findGroupData = groupedData.find(({ id: key }) => key === id) || [];

  return (
    <Wrapper>
      <IconButton color="default" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      {[findGroupData]?.map((callDetail) => (
        <ActivityItem key={callDetail.id} passedkey={callDetail.id} />
      ))}
    </Wrapper>
  );
}

export default ActivityHistory;
