export const catImageHeightCalculatorMainDisplay = (catId: string) => {
  switch (catId[2]) {
    case "t":
      return 275;
    case "s":
      return 200;
    case "r":
      return 180;
    default:
      return 240;
  }
}