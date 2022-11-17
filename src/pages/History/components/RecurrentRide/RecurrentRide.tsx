import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { RideType } from '~/enums/RideType';
import { Wrapper, InnerWrapper, StyledDetailsRideButton, StyledText } from './RecurrentRide.style';

interface Props {
  rideId: number;
  startDate: Dayjs;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  rideType: RideType;
}

export const RecurrentRide = ({
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
    navigate(`/my-historical-recurrent-ride/${rideId}`);
  };

  return (
    <>
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
        <InnerWrapper>
          <StyledDetailsRideButton onClick={handleOwnRideDetails}>
            <span>details</span>
            <ArrowForwardIcon fontSize='small' />
          </StyledDetailsRideButton>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};
