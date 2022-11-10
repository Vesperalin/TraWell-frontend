import { Dayjs } from 'dayjs';
import arrow from '~/assets/images/arrow.webp';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import {
  StyledBox,
  StyledArrow,
  Date,
  PlacesBox,
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
  startDate: Dayjs;
  endDate: Dayjs;
}

export const UserSearchRideInputData = ({
  placeFrom,
  exactPlaceFrom,
  placeTo,
  exactPlaceTo,
  startDate,
  endDate,
}: Props) => {
  const startDay = transformToDoubleDigit(startDate.date());
  const startMonth = transformToDoubleDigit(startDate.month(), true);
  const endDay = transformToDoubleDigit(endDate.date());
  const endMonth = transformToDoubleDigit(endDate.month(), true);

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
        <Date variant='h5'>{`${startDay}.${startMonth}.${startDate.year()}`}</Date>-
        <Date variant='h5'>{`${endDay}.${endMonth}.${endDate.year()}`}</Date>
      </DateBox>
    </StyledBox>
  );
};
