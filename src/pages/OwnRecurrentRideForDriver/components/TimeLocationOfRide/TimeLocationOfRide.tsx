import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
import arrow from '~/assets/images/arrow.webp';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { transformToTime } from '~/utils/TransformToTime';
import {
  OuterWrapper,
  Place,
  Wrapper,
  City,
  Time,
  TimeLength,
  StyledArrow,
  TimeAndArrowWrapper,
  StyledSkeleton,
} from './TimeLocationOfRide.style';

interface Props {
  isLoading: boolean;
  startDate: string | undefined;
  cityFrom: string | undefined;
  placeFrom: string | undefined;
  exactPlaceFrom: string | undefined;
  lengthInMinutes: number | undefined;
  cityTo: string | undefined;
  placeTo: string | undefined;
  exactPlaceTo: string | undefined;
}

export const TimeLocationOfRide = ({
  isLoading,
  startDate,
  cityFrom,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  cityTo,
  placeTo,
  exactPlaceTo,
}: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  if (
    isLoading ||
    !startDate ||
    !cityFrom ||
    !placeFrom ||
    !cityTo ||
    !placeTo ||
    !lengthInMinutes
  ) {
    return (
      <StyledSkeleton
        variant='rectangular'
        height={isSmallScreen ? 210 : 120}
      />
    );
  } else {
    const transformedStartHour = transformToDoubleDigit(dayjs(startDate).hour());
    const transformedStartMinutes = transformToDoubleDigit(dayjs(startDate).minute());
    const [, minutes, correctHours] = transformToTime(lengthInMinutes);
    const [finishHour, finishMinute] = transformToTime(
      lengthInMinutes,
      dayjs(startDate).hour(),
      dayjs(startDate).minute(),
    );

    return (
      <div>
        <OuterWrapper>
          <Time variant='h4'>{`${transformedStartHour}:${transformedStartMinutes}`}</Time>
          <Wrapper>
            <City variant='h3'>{cityFrom}</City>
            <Place variant='h4'>
              {placeFrom}
              {exactPlaceFrom && <>,&nbsp;</>}
            </Place>
            {exactPlaceFrom && <Typography variant='h5'>{exactPlaceFrom}</Typography>}
          </Wrapper>
        </OuterWrapper>
        <TimeAndArrowWrapper>
          <TimeLength variant='h5'>
            {correctHours}h {minutes} min
          </TimeLength>
          <StyledArrow
            alt='arrow'
            src={arrow}
          />
        </TimeAndArrowWrapper>
        <OuterWrapper>
          <Time variant='h4'>{`${finishHour}:${finishMinute}`}</Time>
          <Wrapper>
            <City variant='h3'>{cityTo}</City>
            <Place variant='h4'>
              {placeTo}
              {exactPlaceTo && <>,&nbsp;</>}
            </Place>
            {exactPlaceTo && <Typography variant='h5'>{exactPlaceTo}</Typography>}
          </Wrapper>
        </OuterWrapper>
      </div>
    );
  }
};
