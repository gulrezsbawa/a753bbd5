import React from "react";

const CustomAppsIcon = ({ size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer white circular border */}
      <circle cx="24" cy="24" r="20" fill="white" stroke="none" />

      {/* Inner green circle */}
      <circle cx="24" cy="24" r="24" fill="#3ebb20" stroke="none" />

      <g fill="white">
        <circle cx="15" cy="15" r="3" />
        <circle cx="24" cy="15" r="3" />
        <circle cx="33" cy="15" r="3" />
        <circle cx="15" cy="24" r="3" />
        <circle cx="24" cy="24" r="3" />
        <circle cx="33" cy="24" r="3" />
        <circle cx="15" cy="33" r="3" />
        <circle cx="24" cy="33" r="3" />
        <circle cx="33" cy="33" r="3" />
      </g>
    </svg>
  );
};

export default CustomAppsIcon;
