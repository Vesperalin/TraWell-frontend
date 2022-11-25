import { transformToDoubleDigit } from './TransformToDoubleDigit';

describe('TransformToDoubleDigit', () => {
  test('if returns correctly formatted day that is less than 10', () => {
    expect(transformToDoubleDigit(6)).toBe('06');
  });

  test('if returns correctly formatted day that is higher than 9', () => {
    expect(transformToDoubleDigit(11)).toBe('11');
  });

  test('if returns correctly formatted month that is less than 10', () => {
    expect(transformToDoubleDigit(3, true)).toBe('04');
  });

  test('if returns correctly formatted month that is higher than 9', () => {
    expect(transformToDoubleDigit(11, true)).toBe('12');
  });
});

export {};
