import { Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import arrow from '~/assets/images/arrow.webp';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import {
  StyledBox,
  StyledArrow,
  Date,
  Time,
  PlacesBox,
  TimeBox,
  DateBox,
  Place,
  ExactPlace,
  PlaceBox,
  Seats,
} from './UserSearchRideInputData.style';

interface Props {
  placeFrom: string;
  exactPlaceFrom: string;
  placeTo: string;
  exactPlaceTo: string;
  date: Dayjs;
  time: Dayjs;
  seats: string;
}

export const UserSearchRideInputData = ({
  placeFrom,
  exactPlaceFrom,
  placeTo,
  exactPlaceTo,
  date,
  time,
  seats,
}: Props) => {
  const transformedDay = transformToDoubleDigit(date.date());
  const transformedMonth = transformToDoubleDigit(date.month());
  const transformedHour = transformToDoubleDigit(time.hour());
  const transformedMinutes = transformToDoubleDigit(time.minute());

  return (
    <StyledBox>
      <PlacesBox>
        <PlaceBox>
          <Place variant='h4'>{placeFrom}</Place>
          <ExactPlace variant='h5'>{exactPlaceFrom}</ExactPlace>
        </PlaceBox>
        <StyledArrow
          alt='arrow'
          src={arrow}
        />
        <PlaceBox>
          <Place variant='h4'>{placeTo}</Place>
          <ExactPlace variant='h5'>{exactPlaceTo}</ExactPlace>
        </PlaceBox>
      </PlacesBox>
      <div>
        <DateBox>
          <Date variant='h5'>{`${transformedDay}.${transformedMonth}.${date.year()}`}</Date>
          <TimeBox>
            <Typography variant='h5'>after: </Typography>
            <Time variant='h5'>{`${transformedHour}:${transformedMinutes}`}</Time>
          </TimeBox>
        </DateBox>
        <Seats variant='h5'>
          Seats: <span>{seats}</span>
        </Seats>
      </div>
    </StyledBox>
  );
};
