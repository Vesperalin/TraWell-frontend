import { Dayjs } from 'dayjs';
import arrow from '~/assets/images/arrow.webp';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { transformToTime } from '~/utils/TransformToTime';
import {
  Date,
  Wrapper,
  Place,
  ExactPlace,
  Time,
  TimeLength,
  StyledArrow,
} from './TimeLocationOfRide.style';

interface Props {
  startDate: Dayjs;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
}

export const TimeLocationOfRide = ({
  startDate,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
}: Props) => {
  const transformedDay = transformToDoubleDigit(startDate.date());
  const transformedMonth = transformToDoubleDigit(startDate.month(), true);
  const transformedStartHour = transformToDoubleDigit(startDate.hour());
  const transformedStartMinutes = transformToDoubleDigit(startDate.minute());
  const [, minutes, correctHours] = transformToTime(lengthInMinutes);
  const [finishHour, finishMinute] = transformToTime(
    lengthInMinutes,
    startDate.hour(),
    startDate.minute(),
  );

  return (
    <div>
      <Wrapper>
        <Date variant='h4'>{`${transformedDay}.${transformedMonth}.${startDate.year()}`}</Date>
      </Wrapper>
      <Wrapper>
        <Time variant='h4'>{`${transformedStartHour}:${transformedStartMinutes}`}</Time>
        <Place variant='h4'>{placeFrom}</Place>
        {exactPlaceFrom && <ExactPlace variant='h5'>{exactPlaceFrom}</ExactPlace>}
      </Wrapper>
      <Wrapper>
        <TimeLength variant='caption'>
          {correctHours}h {minutes} min
        </TimeLength>
        <StyledArrow
          alt='arrow'
          src={arrow}
        />
      </Wrapper>
      <Wrapper>
        <Time variant='h4'>{`${finishHour}:${finishMinute}`}</Time>
        <Place variant='h4'>{placeTo}</Place>
        {exactPlaceTo && <ExactPlace variant='h5'>{exactPlaceTo}</ExactPlace>}
      </Wrapper>
    </div>
  );
};
