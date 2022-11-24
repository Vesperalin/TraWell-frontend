import { calculateAge } from './CalculateAge';

describe('CalculateAge', () => {
  test('if age is correct', () => {
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() => new Date(2022, 11, 23).valueOf());

    const dateOfBirth = new Date(2000, 1, 27);
    expect(calculateAge(dateOfBirth)).toBe(22);

    jest.clearAllMocks();
  });

  test('if age is not correct', () => {
    jest.spyOn(global.Date, 'now').mockImplementationOnce(() => new Date(2022, 11, 23).valueOf());

    const dateOfBirth = new Date(1999, 11, 23);
    expect(calculateAge(dateOfBirth)).not.toBe(22);

    jest.clearAllMocks();
  });
});

export {};
