import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';

export const transformToTime = (
  lengthInMinutes: number,
  startHour = 0,
  startMinute = 0,
): [string, string] => {
  const totalMinutes = startHour * 60 + startMinute + lengthInMinutes;
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return [transformToDoubleDigit(hours), transformToDoubleDigit(minutes)];
};
