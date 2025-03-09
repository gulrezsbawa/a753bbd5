export const determineIfGroupKey = (key) => {
  if (key == null) return false;
  return key.startsWith("GroupKey_");
};
