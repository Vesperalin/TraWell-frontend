import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';
import { useNavigate } from 'react-router';
import RidesService from '~/api/services/RidesService';
import { Modal } from '~/components/Modal';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { RideType } from '~/enums/RideType';
import { useAuth } from '~/hooks/useAuth';
import { OwnRideResponse } from '~/models/Rides/OwnRideResponse';
import {
  Wrapper,
  InnerWrapper,
  StyledEditRideButton,
  StyledDeleteRideButton,
  StyledDetailsRideButton,
  StyledText,
} from './SingularRide.style';

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

export const SingularRide = ({
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
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const { refetch, data, isError } = RidesService.useDeleteSingularRide(rideId, token ? token : '');

  const handleDelete = () => {
    refetch().then(() => {
      if (currentPage === 1) {
        refetchRides();
      } else {
        setCurrentPage(1);
      }
    });

    if (isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setText((data as any).request.response.slice(1, -1) as string);
    } else {
      setText(data as string);
    }
    setShowInfoModal(true);
  };

  const handleEdit = () => {
    navigate(`/edit-singular-ride/${rideId}`);
  };

  const handleOwnRideDetails = () => {
    navigate(`/my-ride/${rideId}`);
  };

  const handleOtherRideDetails = () => {
    navigate(`/searched-ride/${rideId}`, {
      state: {
        showButton: false,
      },
    });
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
        <InnerWrapper editable={editable}>
          {editable && (
            <StyledEditRideButton
              onClick={handleEdit}
              className='edit-button'
            >
              <span>edit</span>
              <ArrowForwardIcon fontSize='small' />
            </StyledEditRideButton>
          )}
          {editable && (
            <StyledDeleteRideButton
              onClick={() => setShowQuestionModal(true)}
              className='delete-button'
            >
              <span>delete</span>
              <ArrowForwardIcon fontSize='small' />
            </StyledDeleteRideButton>
          )}
          {editable ? (
            <StyledDetailsRideButton
              onClick={handleOwnRideDetails}
              className='details-own-rides-button'
            >
              <span>details</span>
              <ArrowForwardIcon fontSize='small' />
            </StyledDetailsRideButton>
          ) : (
            <StyledDetailsRideButton
              onClick={handleOtherRideDetails}
              className='details-button'
            >
              <span>details</span>
              <ArrowForwardIcon fontSize='small' />
            </StyledDetailsRideButton>
          )}
        </InnerWrapper>
      </Wrapper>
      {showQuestionModal && (
        <Modal
          open={showQuestionModal}
          title='Delete ride'
          text='Are you sure you want to delete this ride?'
          handleOpen={() => setShowQuestionModal(true)}
          handleClose={() => setShowQuestionModal(false)}
          primaryButtonText='Yes'
          primaryButtonAction={handleDelete}
          showButtonForOpeningModal={false}
          secondaryButtonText='No'
          secondaryButtonAction={() => setShowQuestionModal(false)}
        />
      )}
      {showInfoModal && (
        <Modal
          open={showInfoModal}
          title='Delete ride'
          text={text}
          handleOpen={() => setShowInfoModal(true)}
          handleClose={() => setShowInfoModal(false)}
          primaryButtonText='Okay'
          primaryButtonAction={() => setShowInfoModal(false)}
          showButtonForOpeningModal={false}
        />
      )}
    </>
  );
};
