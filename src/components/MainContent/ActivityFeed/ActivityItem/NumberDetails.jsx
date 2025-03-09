import React from "react";
import {
  Wrapper,
  NumberWrapper,
  NumberTitle,
  Badge,
  SubTitle,
} from "./NumberDetails.styles";
import { formatMobileNumber } from "@utils";

const pretextMapping = (direction) => ({
  missed: "Attempted to call on",
  answered:
    direction === "outbound" ? "Placed a call from" : "Received a call on",
  voicemail: "Left a voicemail on",
});

function NumberDetails({ call_type, from, to, callFrequency, direction }) {
  const formattedFromNumber = formatMobileNumber(from);
  const formattedToNumber = formatMobileNumber(to);
  return (
    <Wrapper>
      <NumberWrapper>
        <NumberTitle>{formattedFromNumber}</NumberTitle>
        {callFrequency > 1 && <Badge>{callFrequency}</Badge>}
      </NumberWrapper>
      <SubTitle>
        {pretextMapping(direction)[call_type]} {formattedToNumber}
      </SubTitle>
    </Wrapper>
  );
}

export default NumberDetails;
