const strings = ["low E", "A", "D", "G", "B", "high E"];

export const intervals = [
  {
    name: "thirds",
    allowedStringsWithRootOnTop: strings.filter((s) => s !== "low E"),
    allowedStringsWithRootOnBottom: strings.filter((s) => s !== "high E"),
  },
  {
    name: "sixths",
    allowedStringsWithRootOnTop: strings.filter(
      (s) => s !== "low E" && s !== "A"
    ),
    allowedStringsWithRootOnBottom: strings.filter(
      (s) => s !== "B" && s !== "high E"
    ),
  },
];

export const keys = ["C", "G", "D", "A", "E"];

export const rootPositions = ["top", "bottom"];

const random = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const createIntervalAssignmet = (opts) => {
  console.log("creating with opts", opts);

  if (
    !(opts.intervals.length && opts.rootPositions.length && opts.keys.length)
  ) {
    return "Select all of the required options!";
  }
  const interval = random(opts.intervals);
  const rootPosition = random(opts.rootPositions);

  return `Play ${interval.name} in the key of ${random(
    opts.keys
  )} with the root on the ${random(
    rootPosition === "top"
      ? interval.allowedStringsWithRootOnTop
      : interval.allowedStringsWithRootOnBottom
  )} string and the root on ${rootPosition}.`;
};
