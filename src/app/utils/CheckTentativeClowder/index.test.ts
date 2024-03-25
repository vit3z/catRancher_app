import { CheckTentativeClowder } from "./index";

describe("CheckTentativeClowder", () => {
  it("should return peaceful clowder when no values are 2", () => {
      const clowderValues = {
        stripes: {
          oneStripe: 0,
          twoStripes: 0,
          threeStripes: 3,
        },
        color: {
          black: 1,
          white: 1,
          gray: 1,
        },
        shape: {
          tall: 1,
          short: 1,
          round: 1,
        },
        eyes: {
          green: 1,
          blue: 1,
          red: 1,
        },
      };
    const expectedResult = {
      theClowderWillBePeaceful: true,
      disorderCause: [],
    };
    expect(CheckTentativeClowder(clowderValues)).toEqual(expectedResult);
  });

  it("should return not peaceful clowder and the disorder cause if one value is 2", () => {
    const clowderValues = {
      stripes: {
        oneStripe: 0,
        twoStripes: 1,
        threeStripes: 2,
      },
      color: {
        black: 1,
        white: 1,
        gray: 1,
      },
      shape: {
        tall: 1,
        short: 1,
        round: 1,
      },
      eyes: {
        green: 1,
        blue: 1,
        red: 1,
      },
    };
  const expectedResult = {
    theClowderWillBePeaceful: false,
    disorderCause: ["stripes"],
  };
  expect(CheckTentativeClowder(clowderValues)).toEqual(expectedResult);
});
});
