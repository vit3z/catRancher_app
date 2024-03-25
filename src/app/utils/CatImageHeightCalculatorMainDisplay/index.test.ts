import { catImageHeightCalculatorMainDisplay } from './index'; 

describe('CatImageHeightCalculatorMainDisplay', () => {
  it('should return 275 for tall cat', () => {
    const catId = '1wtr';
    expect(catImageHeightCalculatorMainDisplay(catId)).toEqual(275);
  });

  it('should return 200 for short cat', () => {
    const catId = '1wsr';
    expect(catImageHeightCalculatorMainDisplay(catId)).toEqual(200);
  });

  it('should return 180 for round cat', () => {
    const catId = '1wrr';
    expect(catImageHeightCalculatorMainDisplay(catId)).toEqual(180);
  });

  it('should return 240 for invalid cat type', () => {
    const catId = '1wor';
    expect(catImageHeightCalculatorMainDisplay(catId)).toEqual(240);
  });
});