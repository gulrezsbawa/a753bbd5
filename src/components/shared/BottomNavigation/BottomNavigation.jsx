import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  NavContainer,
  NavButton,
  MainButton,
  Badge,
  StyledLensIcon,
  CallButtonWrapper,
} from "./BottomNavigation.styles";
import CustomAppsIcon from "./CustomAppsIcon";
import { useCall } from "@contexts/ActivityProvider";

const BottomNavigation = () => {
  const { groupedData } = useCall();

  const tolalCallCount = groupedData.reduce((acc, item) => {
    return acc + item.call_count;
  }, 0);

  return (
    <NavContainer>
      <NavButton>
        <CallButtonWrapper>
          <PhoneIcon />
          {tolalCallCount > 0 && <Badge>{tolalCallCount}</Badge>}
        </CallButtonWrapper>
      </NavButton>
      <NavButton>
        <PersonOutlineIcon />
      </NavButton>
      <NavButton />
      <MainButton>
        <CustomAppsIcon size={100} />
      </MainButton>
      <NavButton>
        <SettingsIcon />
      </NavButton>
      <NavButton>
        <StyledLensIcon />
      </NavButton>
    </NavContainer>
  );
};

export default BottomNavigation;
