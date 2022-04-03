const colorStatus = {
  created: "orange",
  paid: "emerald",
  cancelled: "red",
  expired: "blueGray",
};

/**
 *
 * @param {string: "created" | "paid" | "cancelled" | "expired"} status
 * @returns string
 */

export const getColorByStatus = (status) => {
  if (typeof status !== "string") return "blueGray";

  console.log(status, colorStatus[status]);

  return colorStatus[status];
};
