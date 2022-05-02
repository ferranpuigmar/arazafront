const orderBySmallBreakpoint = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
};

export const getBreakpoints = (breakpointsList) => {
  const breakpoints = [];

  for (const prop in breakpointsList) {
    breakpoints.push(parseInt(breakpointsList[prop].min));
  }
  return breakpoints.sort(orderBySmallBreakpoint);
};
