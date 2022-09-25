import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { Paths } from '~/enums/Paths';
import { RideType } from '~/enums/RideType';
import {
  Wrapper,
  InnerWrapper,
  StyledEditRideLink,
  StyledDeleteRideLink,
  StyledDetailsRideLink,
  StyledText,
} from './Ride.style';

interface Props {
  startDate: Dayjs;
  isCar: boolean;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  rideType: RideType;
}

export const Ride = ({
  startDate,
  isCar,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  rideType,
}: Props) => {
  return (
    <Wrapper>
      <div>
        <StyledText variant='h4'>{rideType}</StyledText>
        <TimeLocationOfRide
          startDate={startDate}
          isCar={isCar}
          placeFrom={placeFrom}
          exactPlaceFrom={exactPlaceFrom}
          lengthInMinutes={lengthInMinutes}
          placeTo={placeTo}
          exactPlaceTo={exactPlaceTo}
        />
      </div>
      <InnerWrapper>
        <StyledEditRideLink
          style={{ textDecoration: 'none' }}
          to={Paths.Home}
        >
          <span>edit</span>
          <ArrowForwardIcon fontSize='small' />
        </StyledEditRideLink>
        <StyledDeleteRideLink
          style={{ textDecoration: 'none' }}
          to={Paths.Home}
        >
          <span>delete</span>
          <ArrowForwardIcon fontSize='small' />
        </StyledDeleteRideLink>
        <StyledDetailsRideLink
          style={{ textDecoration: 'none' }}
          to={Paths.Home}
        >
          <span>details</span>
          <ArrowForwardIcon fontSize='small' />
        </StyledDetailsRideLink>
      </InnerWrapper>
    </Wrapper>
  );
};
