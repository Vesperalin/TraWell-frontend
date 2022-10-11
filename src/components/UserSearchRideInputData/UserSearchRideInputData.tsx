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
} from './UserSearchRideInputData.style';

interface Props {
  placeFrom: string;
  exactPlaceFrom: string;
  placeTo: string;
  exactPlaceTo: string;
  date: Dayjs;
}

export const UserSearchRideInputData = ({
  placeFrom,
  exactPlaceFrom,
  placeTo,
  exactPlaceTo,
  date,
}: Props) => {
  const transformedDay = transformToDoubleDigit(date.date());
  const transformedMonth = transformToDoubleDigit(date.month());
  const transformedHour = transformToDoubleDigit(date.hour());
  const transformedMinutes = transformToDoubleDigit(date.minute());

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
      <DateBox>
        <Date variant='h5'>{`${transformedDay}.${transformedMonth}.${date.year()}`}</Date>
        <TimeBox>
          <Typography variant='h5'>after: </Typography>
          <Time variant='h5'>{`${transformedHour}:${transformedMinutes}`}</Time>
        </TimeBox>
      </DateBox>
    </StyledBox>
  );
};
