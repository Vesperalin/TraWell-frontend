import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { transformToFullDate } from './TransformToFullDate';

describe('TransformToFullDate', () => {
  test('if returns correct date', () => {
    dayjs.extend(utc);

    const date = dayjs(new Date(2022, 11, 12, 0, 0, 0));
    const time = dayjs(new Date(2022, 11, 12, 14, 15, 0));
    const expected = dayjs(new Date(2022, 11, 12, 14, 15, 0));

    expect(transformToFullDate(date, time)).toBe(dayjs(expected).utc().format());
  });

  test('if returns incorrect date', () => {
    dayjs.extend(utc);

    const date = dayjs(new Date(2022, 11, 12, 0, 0, 0));
    const time = dayjs(new Date(2022, 11, 12, 14, 15, 0));
    const expected = dayjs(new Date(2022, 12, 12, 14, 15, 0));

    expect(transformToFullDate(date, time)).not.toBe(dayjs(expected).utc().format());
  });
});

export {};
