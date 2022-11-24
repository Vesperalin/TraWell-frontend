import { transformToTime } from './TransformToTime';

describe('TransformToTime', () => {
  test('if returns correct array of time elements fot length in minutes', () => {
    expect(transformToTime(134)).toEqual(['02', '14', '02']);
  });

  test('if returns correct array of time elements fot length in minutes and start time', () => {
    expect(transformToTime(134, 14, 15)).toEqual(['16', '29', '16']);
  });
});

export {};
