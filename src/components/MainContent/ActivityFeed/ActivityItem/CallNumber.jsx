import React from "react";
import { Wrapper } from "./CallNumber.styles";
import CallIcon from "./CallIcon";
import NumberDetails from "./NumberDetails";
import Action from "./Action";
import Time from "./Time";
import { getDateAndTime } from "@utils";

function CallNumber({ callDetail }) {
  const {
    from,
    to,
    latest_time,
    created_at,
    call_count,
    call_type,
    direction,
    id,
  } = callDetail || {};

  const { time } = getDateAndTime(latest_time || created_at);

  return (
    <Wrapper>
      <CallIcon call_type={call_type} direction={direction} />
      <NumberDetails
        call_type={call_type}
        from={from}
        to={to}
        callFrequency={call_count}
        direction={direction}
      />
      <Action id={id} call_count={call_count} />
      <Time time={time} />
    </Wrapper>
  );
}

export default CallNumber;
