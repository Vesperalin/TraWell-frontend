import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';
import { useNavigate } from 'react-router';
import RidesService from '~/api/services/RidesService';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { Paths } from '~/enums/Paths';
import { RideType } from '~/enums/RideType';
import { useAuth } from '~/hooks/useAuth';
import { OwnRideResponse } from '~/models/Rides/OwnRideResponse';
import {
  Wrapper,
  InnerWrapper,
  StyledEditRideButton,
  StyledDeleteRideButton,
  StyledDetailsRideLink,
  StyledText,
} from './Ride.style';

interface Props {
  editable: boolean;
  rideId: number;
  startDate: Dayjs;
  placeFrom: string;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  rideType: RideType;
  refetchRides: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<OwnRideResponse, Error>>;
}

export const Ride = ({
  editable,
  rideId,
  startDate,
  placeFrom,
  exactPlaceFrom,
  currentPage,
  setCurrentPage,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  rideType,
  refetchRides,
}: Props) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { refetch } = RidesService.useDeleteRide(rideId, token ? token : '');

  const handleDelete = () => {
    refetch().then(() => {
      if (currentPage === 1) {
        refetchRides();
      } else {
        setCurrentPage(1);
      }
    });
  };

  const handleEdit = () => {
    if (rideType === RideType.Singular) {
      navigate(`/edit-singular-ride/${rideId}`);
    } else {
      // TODO - recurrent ride redirection
    }
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
      <InnerWrapper editable={editable}>
        {editable && (
          <StyledEditRideButton onClick={handleEdit}>
            <span>edit</span>
            <ArrowForwardIcon fontSize='small' />
          </StyledEditRideButton>
        )}
        {editable && (
          <StyledDeleteRideButton onClick={handleDelete}>
            <span>delete</span>
            <ArrowForwardIcon fontSize='small' />
          </StyledDeleteRideButton>
        )}
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
