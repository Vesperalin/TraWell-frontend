import DirectionsBusFilledTwoToneIcon from '@mui/icons-material/DirectionsBusFilledTwoTone';
import DirectionsCarFilledTwoToneIcon from '@mui/icons-material/DirectionsCarFilledTwoTone';
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
} from './TimeLocationOfRide.stye';

interface Props {
  startDate: Dayjs;
  isCar: boolean;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
}

export const TimeLocationOfRide = ({
  startDate,
  isCar,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
}: Props) => {
  const transformedDay = transformToDoubleDigit(startDate.date());
  const transformedMonth = transformToDoubleDigit(startDate.month());
  const transformedStartHour = transformToDoubleDigit(startDate.hour());
  const transformedStartMinutes = transformToDoubleDigit(startDate.minute());
  const [hours, minutes] = transformToTime(lengthInMinutes);
  const [finishHour, finishMinute] = transformToTime(
    lengthInMinutes,
    startDate.hour(),
    startDate.minute(),
  );

  return (
    <div>
      <Wrapper>
        <Date variant='h4'>{`${transformedDay}.${transformedMonth}.${startDate.year()}`}</Date>
        {isCar ? <DirectionsCarFilledTwoToneIcon /> : <DirectionsBusFilledTwoToneIcon />}
      </Wrapper>
      <Wrapper>
        <Time variant='h4'>{`${transformedStartHour}:${transformedStartMinutes}`}</Time>
        <Place variant='h4'>{placeFrom}</Place>
        {exactPlaceFrom && <ExactPlace variant='h5'>{exactPlaceFrom}</ExactPlace>}
      </Wrapper>
      <Wrapper>
        <TimeLength variant='caption'>
          {hours}h {minutes} min
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
