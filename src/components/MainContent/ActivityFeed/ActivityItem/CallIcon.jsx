import React from "react";
import { Call, ArrowDownward } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Wrapper } from "./CallIcon.styles";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

function CallIcon({ call_type, direction }) {
  return (
    <Wrapper>
      {direction === "inbound" && call_type === "missed" && (
        <PhoneMissedIcon fontSize="small" />
      )}
      {direction === "inbound" && call_type !== "missed" && (
        <Box position="relative" display="inline-block">
          <Call sx={{ color: "gray", fontSize: 16 }} />
          <ArrowDownward
            sx={{
              color: "orangered",
              fontSize: 12,
              fontWeight: "bold",
              position: "absolute",
              top: -4,
              left: 5,
            }}
          />
        </Box>
      )}

      {direction === "outbound" && (
        <Box position="relative" display="inline-block">
          <Call sx={{ color: "gray", fontSize: 16 }} />
          <ArrowDownward
            sx={{
              color: "green",
              fontSize: 12,
              fontWeight: "bold",
              position: "absolute",
              top: -4,
              left: 5,
              transform: "rotate(180deg)",
            }}
          />
        </Box>
      )}
    </Wrapper>
  );
}

export default CallIcon;
