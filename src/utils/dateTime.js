export const getDateAndTime = (dateInput) => {
  const date = new Date(dateInput);
  if (dateInput == null || isNaN(date.getTime())) {
    return {
      date: "Invalid Date",
      time: "Invalid Date",
      timestamp: NaN,
    };
  }
  return {
    date: date.toISOString().split("T")[0],
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    timestamp: date.getTime(),
  };
};
