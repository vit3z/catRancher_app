import '@testing-library/jest-dom'
import { BreakDownCatStats } from './index'; 

describe('BreakDownCatStats', () => {
  it('should correctly calculate cat attributes', () => {
    const testClowder = ['1ttg', '2wsb', '3brr'];
    const result = BreakDownCatStats(testClowder);
    expect(result).toEqual({
      stripes: { oneStripe: 1, twoStripes: 1, threeStripes: 1 },
      color: { black: 1, white: 1, gray: 1 },
      shape: { tall: 1, short: 1, round: 1 },
      eyes: { green: 1, blue: 1, red: 1 }
    });
  });

  it('should correctly calculate cat attributes even when invalid stats are sent', () => {
    const testClowder = ['4mno', '2wsb', '3brr'];
    const result = BreakDownCatStats(testClowder);
    expect(result).toEqual({
      stripes: { oneStripe: 0, twoStripes: 1, threeStripes: 1 },
      color: { black: 1, white: 1, gray: 0 },
      shape: { tall: 0, short: 1, round: 1 },
      eyes: { green: 0, blue: 1, red: 1 }
    });
  });
});
