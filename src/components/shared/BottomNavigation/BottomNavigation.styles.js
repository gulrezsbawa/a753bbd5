import LensIcon from "@mui/icons-material/Lens";
import styled from "styled-components";

export const NavContainer = styled.div`
  position: absolute;
  height: 2rem;

  bottom: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 20px;
  position: relative;
  color: gray;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: black;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background: #fc5423;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 12px;
`;

export const MainButton = styled.button`
  background: white;
  position: absolute;
  color: white;
  border: none;
  outline: none;
  font-size: 22px;
  width: 4.25rem;
  height: 4.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-18px);
  cursor: pointer;
`;

export const StatusIndicator = styled.div`
  width: 12px;
  height: 12px;
  background: #3ebb20;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 5px #efefef;
`;

export const StyledLensIcon = styled(LensIcon)`
  font-size: 10px !important;
  color: #3ebb20;
  position: relative;
  z-index: 1;
  padding: 4px;
  border: 2px solid #efefef;
  border-radius: 50%;

  &:hover {
    border: 2px solid #000;
  }
`;

export const CallButtonWrapper = styled.div`
  border-bottom: 4px solid #3ebb20;
`;
