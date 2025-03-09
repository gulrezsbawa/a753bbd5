import React from "react";
import { Wrapper, Label, PostFix } from "./Time.styles";

function Time({ time }) {
  const onlyTime = time?.split(" ")[0];
  const AMPM = time?.split(" ")[1];

  return (
    <Wrapper>
      <Label> {onlyTime}</Label>
      <PostFix>{AMPM}</PostFix>
    </Wrapper>
  );
}

export default Time;
