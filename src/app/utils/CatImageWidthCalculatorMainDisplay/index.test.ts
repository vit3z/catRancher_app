import { catImageWidthCalculatorMainDisplay } from './index'; 

describe('CatImageWidthCalculatorMainDisplay', () => {
  it('should return 275 for tall cat', () => {
    const catId = '1wtr';
    expect(catImageWidthCalculatorMainDisplay(catId)).toEqual(180);
  });

  it('should return 200 for short cat', () => {
    const catId = '1wsr';
    expect(catImageWidthCalculatorMainDisplay(catId)).toEqual(120);
  });

  it('should return 180 for round cat', () => {
    const catId = '1wrr';
    expect(catImageWidthCalculatorMainDisplay(catId)).toEqual(180);
  });

  it('should return 240 for invalid cat type', () => {
    const catId = '1wor';
    expect(catImageWidthCalculatorMainDisplay(catId)).toEqual(180);
  });
});