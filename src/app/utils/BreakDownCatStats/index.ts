import _ from "lodash";
import { clowderCheckerInitValue } from "../../../consts/initialValues";

export const BreakDownCatStats = (tentativeClowder:string[]) => {
  // Here we break down cat stats into a more manageable dataset; which is an object with the 
  // 4 categories: stripes, color, shape and eyes
  // This is then used to figure out if there will be peace in the Clowder, because if any of these stats is 2
  // The cats will fight
  const clowderValues = _.cloneDeep(clowderCheckerInitValue);
  tentativeClowder.map((cat: string, index: number) => {
    switch (cat[0]) {
      case "1":
        clowderValues.stripes.oneStripe++;
        break;
      case "2":
        clowderValues.stripes.twoStripes++;
        break;
      case "3":
        clowderValues.stripes.threeStripes++;
        break;
      default:
        break;
    }
    switch (cat[1]) {
      case "b":
        clowderValues.color.black++;
        break;
      case "w":
        clowderValues.color.white++;
        break;
      case "t":
        clowderValues.color.gray++;
        break;
      default:
        break;
    }
    switch (cat[2]) {
      case "t":
        clowderValues.shape.tall++;
        break;
      case "s":
        clowderValues.shape.short++;
        break;
      case "r":
        clowderValues.shape.round++;
        break;
      default:
        break;
    }
    switch (cat[3]) {
      case "g":
        clowderValues.eyes.green++;
        break;
      case "b":
        clowderValues.eyes.blue++;
        break;
      case "r":
        clowderValues.eyes.red++;
        break;
      default:
        break;
    }
  });

  return clowderValues;
};
