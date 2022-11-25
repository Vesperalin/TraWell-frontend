export const transformToDoubleDigit = (value: number, ifMonth?: boolean): string =>
  (ifMonth ? value + 1 : value).toString().padStart(2, '0');
