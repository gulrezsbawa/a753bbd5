import React from "react";
import { CiSliderVertical } from "react-icons/ci";
import { IconButton } from "@mui/material";
import {
  HeaderContainer,
  Label,
  Logo,
  ActionWrapper,
  StyledTab,
  StyledTabs,
  LeftWrapper,
} from "./TopNavigation.styles";
import { ActivityIcon } from "./ActivityIcon";
import { useCall } from "@contexts/ActivityProvider";

function TopNavigation() {
  const { selectedTab, setSelectedTab } = useCall();
  return (
    <HeaderContainer>
      {/* Left: Logo */}
      <LeftWrapper>
        <Logo>
          <ActivityIcon />
        </Logo>

        {/* Center: Label */}
        <Label>Activity</Label>
      </LeftWrapper>

      <ActionWrapper>
        {/* Center: Tabs */}
        <StyledTabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <StyledTab label="Inbox" />
          <StyledTab label="All calls" />
          <StyledTab label="Archived" />
        </StyledTabs>

        {/* Right: Filter/Settings Icon */}
        <IconButton>
          <CiSliderVertical size={18} color="black" />
        </IconButton>
      </ActionWrapper>
    </HeaderContainer>
  );
}

export default TopNavigation;
