export const catImageWidthCalculatorMainDisplay = (catId: string) => {
  switch (catId[2]) {
    case "t":
      return 180;
    case "s":
      return 120;
    case "r":
      return 180;
    default:
      return 180;
  }
}