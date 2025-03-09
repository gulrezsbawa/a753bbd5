import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import { FiMoreVertical } from "react-icons/fi";
import { Wrapper, ActionLabel, ActionWrapper } from "./Action.styles";
import { useCall } from "@contexts/ActivityProvider";
import { determineIfGroupKey } from "@utils";
import { useLocation, useNavigate } from "react-router-dom";

function Action({ id = 0, call_count = 0 }) {
  const { selectedTab, archiveOrRestoreMutation, groupedData } = useCall();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleArchiveOrRestore = () => {
    const isGroup = determineIfGroupKey(id);
    archiveOrRestoreMutation.mutate({ id, isGroup });
    handleClose();
  };

  const handleViewHistoryOrInfo = () => {
    const path =
      selectedTab === 0 && isHomePage && call_count > 1
        ? "activity-history"
        : "activity-detail";

    if (id.includes("GroupKey_") && call_count === 1) {
      const activityId = groupedData.find(({ id: key }) => key === id)
        .callList[0].id;

      navigate(`/${path}/${activityId}`);
    } else {
      navigate(`/${path}/${id}`);
    }
  };

  const IconComponent1 =
    selectedTab === 0 && isHomePage && call_count > 1
      ? HistoryOutlinedIcon
      : InfoOutlinedIcon;
  const IconComponent2 =
    selectedTab === 2 ? UnarchiveOutlinedIcon : Inventory2OutlinedIcon;

  const Action1 =
    selectedTab === 0 && isHomePage && call_count > 1
      ? "View History"
      : "View Info";
  const Action2 = selectedTab !== 2 ? "Archive" : "Restore";

  return (
    <Wrapper>
      <IconButton onClick={handleClick}>
        <FiMoreVertical
          style={{
            color: "gray",
            fontSize: "16px",
            opacity: 0.6,
          }}
        />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          onClick={handleViewHistoryOrInfo}
          sx={{ fontSize: "0.75rem" }}
        >
          <ActionWrapper>
            <IconComponent1 sx={{ fontSize: 12 }} />
            <ActionLabel>{Action1}</ActionLabel>
          </ActionWrapper>
        </MenuItem>
        <MenuItem onClick={handleArchiveOrRestore} sx={{ fontSize: "0.75rem" }}>
          <ActionWrapper>
            <IconComponent2 sx={{ fontSize: 12 }} />
            <ActionLabel>{Action2}</ActionLabel>
          </ActionWrapper>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
}

export default Action;
