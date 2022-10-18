import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';

export const transformToFullDate = (date: Dayjs, time: Dayjs) => {
  const year = date.year().toString();
  const monthTemp = date.month() + 1;
  const dayTemp = date.date();
  const hourTemp = time.hour();
  const minuteTemp = time.minute();
  let month = '';
  let day = '';
  let hour = '';
  let minute = '';

  if (monthTemp < 10) {
    month = '0' + monthTemp;
  } else {
    month = monthTemp.toString();
  }

  if (dayTemp < 10) {
    day = '0' + dayTemp;
  } else {
    day = dayTemp.toString();
  }

  if (hourTemp < 10) {
    hour = '0' + hourTemp;
  } else {
    hour = hourTemp.toString();
  }

  if (minuteTemp < 10) {
    minute = '0' + minuteTemp;
  } else {
    minute = minuteTemp.toString();
  }

  dayjs.extend(utc);

  return dayjs(`${year}-${month}-${day} ${hour}:${minute}`).utc().format();
};
