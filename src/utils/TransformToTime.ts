import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit/TransformToDoubleDigit';

export const transformToTime = (
  lengthInMinutes: number,
  startHour = 0,
  startMinute = 0,
): [string, string, string] => {
  const totalMinutes = startHour * 60 + startMinute + lengthInMinutes;
  const minutes = totalMinutes % 60;
  let hours = Math.floor(totalMinutes / 60);
  const tempHours = hours;

  if (hours > 24) {
    hours = hours % 24;
  }

  return [
    transformToDoubleDigit(hours),
    transformToDoubleDigit(minutes),
    transformToDoubleDigit(tempHours),
  ];
};
