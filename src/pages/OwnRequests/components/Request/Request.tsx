import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ridesClient } from '~/api/clients/ridesClient';
import { Modal } from '~/components/Modal';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { User } from '~/components/User';
import { RequestStatus } from '~/enums/RequestStatus';
import { useAuth } from '~/hooks/useAuth';
import {
  Wrapper,
  FirstInnerWrapper,
  SecondInnerWrapper,
  StyledButton,
  MediumPrimaryButton,
  SmallPrimaryButton,
  StatusWrapper,
  StatusText,
} from './Request.style';

export interface Props {
  userId: number;
  requestId: number;
  rideId: number;
  startDate: Dayjs;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  userName: string;
  imageSource: string;
  reviewMean: number;
  requestStatus: RequestStatus;
  refetchData: () => void;
}

export const Request = ({
  userId,
  requestId,
  rideId,
  startDate,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  userName,
  imageSource,
  reviewMean,
  requestStatus,
  refetchData,
}: Props) => {
  const navigate = useNavigate();
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const { token } = useAuth();

  const onCancel = () => {
    setShowQuestionModal(true);
  };

  const cancelRequest = async () => {
    setShowQuestionModal(false);
    const response = await ridesClient.delete<unknown>(`rides/request/${requestId}/`, {
      headers: { Authorization: 'Bearer ' + token },
    });
    setShowInfoModal(true);
    setText(response.data as string);
    refetchData();
  };

  const handleDetailsView = () => {
    navigate(`/searched-ride/${rideId}`, {
      state: {
        showButton: false,
      },
    });
  };

  return (
    <>
      <Wrapper>
        <FirstInnerWrapper>
          <TimeLocationOfRide
            startDate={startDate}
            placeFrom={placeFrom}
            exactPlaceFrom={exactPlaceFrom}
            lengthInMinutes={lengthInMinutes}
            placeTo={placeTo}
            exactPlaceTo={exactPlaceTo}
          />
          <StyledButton onClick={handleDetailsView}>
            details
            <ArrowForwardIcon fontSize='small' />
          </StyledButton>
        </FirstInnerWrapper>
        <SecondInnerWrapper>
          <User
            userId={userId}
            isAvatarFirstDesktop={false}
            name={userName}
            imageSource={imageSource}
            reviewMean={reviewMean}
          />
          <StatusWrapper requestStatus={requestStatus}>
            <StatusText requestStatus={requestStatus}>
              Status: <span>{requestStatus}</span>
            </StatusText>
            {(requestStatus === RequestStatus.Accepted ||
              requestStatus === RequestStatus.Pending) && (
              <>
                <MediumPrimaryButton
                  size='medium'
                  onClick={onCancel}
                >
                  cancel
                </MediumPrimaryButton>
                <SmallPrimaryButton
                  size='small'
                  onClick={onCancel}
                >
                  cancel
                </SmallPrimaryButton>
              </>
            )}
          </StatusWrapper>
        </SecondInnerWrapper>
      </Wrapper>
      {showQuestionModal && (
        <Modal
          open={showQuestionModal}
          title='Cancel request'
          text='Are you sure you want to delete this request?'
          handleOpen={() => setShowQuestionModal(true)}
          handleClose={() => setShowQuestionModal(false)}
          primaryButtonText='Yes'
          primaryButtonAction={cancelRequest}
          showButtonForOpeningModal={false}
          secondaryButtonText='No'
          secondaryButtonAction={() => setShowQuestionModal(false)}
        />
      )}
      {showInfoModal && (
        <Modal
          open={showQuestionModal}
          title='Cancel request'
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
