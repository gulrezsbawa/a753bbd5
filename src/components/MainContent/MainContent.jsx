import React from "react";
import {
  Wrapper,
  TitleBoxWrapper,
  TitleBox,
  Title,
  EmptyList,
  EmptyListLabel,
} from "./MainContent.styles";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import ActivityFeed from "./ActivityFeed";
import { useCall } from "@contexts/ActivityProvider";
import CircularProgress from "@mui/material/CircularProgress";

function MainContent() {
  const {
    groupedData,
    handleArchiveOrRestoreAll,
    isActiviesLoading,
    activitiesError,
    selectedTab,
  } = useCall();

  const isArchivedTab = selectedTab === 2;
  const IconComponent = isArchivedTab
    ? UnarchiveOutlinedIcon
    : Inventory2OutlinedIcon;
  const actionText = isArchivedTab ? "Restore all calls" : "Archive all calls";

  return (
    <Wrapper>
      <TitleBoxWrapper>
        <TitleBox onClick={handleArchiveOrRestoreAll}>
          <IconComponent />
          <Title>{actionText}</Title>
        </TitleBox>
      </TitleBoxWrapper>
      {isActiviesLoading && (
        <EmptyList>
          <CircularProgress />
        </EmptyList>
      )}
      {!isActiviesLoading && activitiesError && (
        <EmptyList>
          <EmptyListLabel>Error fetching data</EmptyListLabel>
        </EmptyList>
      )}
      {!isActiviesLoading && groupedData.length === 0 && (
        <EmptyList>
          <EmptyListLabel>No Recents</EmptyListLabel>
        </EmptyList>
      )}
      {!isActiviesLoading && groupedData.length > 0 && <ActivityFeed />}
    </Wrapper>
  );
}

export default MainContent;
