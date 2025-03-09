export const formatMobileNumber = (number) => {
  if (!number) return "";

  const numStr = number.toString().replace(/\D/g, "");

  if (numStr.length < 10) return number;

  const formatByCountry = (prefix, parts) =>
    `+${numStr.slice(0, prefix)} ${parts
      .map(([start, end]) => numStr.slice(start, end))
      .join(" ")}`;

  if (numStr.startsWith("33"))
    return formatByCountry(2, [[2, 3], [3, 5], [5, 7], [7, 9], [9]]);
  if (numStr.startsWith("1")) return formatByCountry(1, [[1, 4], [4, 7], [7]]);

  return formatByCountry(2, [[2, 4], [4, 6], [6, 8], [8]]);
};
