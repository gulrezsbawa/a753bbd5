export const sortActivityDetails = (activity) =>
  activity.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
