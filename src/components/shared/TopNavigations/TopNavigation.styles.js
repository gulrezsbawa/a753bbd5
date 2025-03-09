import { Tabs, Tab } from "@mui/material";
import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  background: #fafaf9 !important;
  box-shadow: none;
  max-width: 376px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  padding: 0 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 12px 24px 12px 8px;
  margin: 0;
  background-color: #fff !important;
  border: 0.25px solid #ddd;
  border-radius: none !important;
  border-radius: 0 0 32px 0 !important;
  boredr-right-bottom-radius: 50px !important;
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 14px;
  color: #424242;
  background-color: #fff !important;
`;

export const Logo = styled.div`
  display: flex;
  margin: 0 8px;
`;

export const StyledTabs = styled(Tabs)`
  flex-grow: 1;
  font-family: "Roboto", sans-serif;
  padding: 0 !important;

  max-width: 320px; /* Restrict width to fit only 2 tabs */
  overflow-x: auto; /* Allow horizontal scrolling */

  border-radius: 10px 10px !important;
  .MuiTabs-indicator {
    background-color: #fc5624;
    transition: all 0.3s ease-in-out !important;
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: none !important;
  font-weight: 500;
  font-size: 12px !important;
  color: #424242 !important;
  min-width: auto !important;
  padding: 0 !important;
  margin: 0 18px !important; /* Fixed typo */

  &.MuiTab-root {
    width: auto !important;
  }

  &.Mui-selected {
    color: black; /* Active tab color */
    font-weight: 600;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Ensures proper spacing */
  flex-grow: 1;
  padding: 0 2px;
  height: 100% !important;
  min-width: 200px; /* Prevents shrinking too much */
  overflow: visible; /* Ensures icon stays visible */
`;
