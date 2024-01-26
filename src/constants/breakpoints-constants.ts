export const BreakPointSize = {
  Mobile: 500,
  Tablet: 768,
  Laptop: 992,
  LargeScreen: 1200,
};

export const BreakpointsConstants = {
  Mobile: `@media (max-width: ${BreakPointSize.Mobile}px)`,
  Tablet: `@media (max-width: ${BreakPointSize.Tablet}px)`,
  Laptop: `@media (max-width: ${BreakPointSize.Laptop}px)`,
  LargeScreen: `@media (max-width: ${BreakPointSize.LargeScreen}px)`,
};
