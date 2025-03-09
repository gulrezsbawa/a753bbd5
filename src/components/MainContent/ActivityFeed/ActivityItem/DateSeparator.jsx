import React from "react";
import { DateDivider, Line, DateText } from "./DateSeparator.styles";

function DateSeparator({ date }) {
  const providedDate = new Date(date);

  const options = { month: "long", day: "2-digit", year: "numeric" };
  const formattedDate = providedDate
    .toLocaleDateString("en-US", options)
    .toUpperCase()
    .replace(/(\w+)\s(\d+),\s(\d+)/, "$1, $2 $3");

  return (
    <DateDivider>
      <Line />
      <DateText>{formattedDate}</DateText>
      <Line />
    </DateDivider>
  );
}

export default DateSeparator;
