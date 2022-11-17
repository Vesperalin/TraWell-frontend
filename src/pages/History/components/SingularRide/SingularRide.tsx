import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { RideType } from '~/enums/RideType';
import { Wrapper, InnerWrapper, StyledDetailsRideButton, StyledText } from './SingularRide.style';

interface Props {
  isOwn: boolean;
  rideId: number;
  startDate: Dayjs;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  rideType: RideType;
}

export const SingularRide = ({
  isOwn,
  rideId,
  startDate,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  rideType,
}: Props) => {
  const navigate = useNavigate();

  const handleOwnRideDetails = () => {
    navigate(`/my-historical-ride/${rideId}`);
  };

  const handleOtherRideDetails = () => {
    navigate(`/searched-historical-ride/${rideId}`, {
      state: {
        showButton: false,
      },
    });
  };

  return (
    <Wrapper>
      <div>
        <StyledText variant='h4'>{rideType}</StyledText>
        <TimeLocationOfRide
          startDate={startDate}
          placeFrom={placeFrom}
          exactPlaceFrom={exactPlaceFrom}
          lengthInMinutes={lengthInMinutes}
          placeTo={placeTo}
          exactPlaceTo={exactPlaceTo}
        />
      </div>
      <InnerWrapper editable={isOwn}>
        {isOwn ? (
          <StyledDetailsRideButton onClick={handleOwnRideDetails}>
            <span>details</span>
            <ArrowForwardIcon fontSize='small' />
          </StyledDetailsRideButton>
        ) : (
          <StyledDetailsRideButton onClick={handleOtherRideDetails}>
            <span>details</span>
            <ArrowForwardIcon fontSize='small' />
          </StyledDetailsRideButton>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};
