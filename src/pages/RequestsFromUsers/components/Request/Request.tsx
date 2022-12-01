import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ridesClient } from '~/api/clients/ridesClient';
import { Modal } from '~/components/Modal';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { User } from '~/components/User';
import { useAuth } from '~/hooks/useAuth';
import {
  Wrapper,
  FirstInnerWrapper,
  SecondInnerWrapper,
  StyledButton,
  MediumPrimaryButton,
  SmallPrimaryButton,
  MediumSecondaryButton,
  SmallSecondaryButton,
  ButtonsWrapper,
} from './Request.style';

interface Props {
  currentPage: number;
  setCurrentPage: (value: number) => void;
  requestId: number;
  rideId: number;
  userId: number;
  startDate: Dayjs;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  userName: string;
  imageSource: string;
  reviewMean: number;
  refetchData: () => void;
}

export const Request = ({
  currentPage,
  setCurrentPage,
  requestId,
  rideId,
  userId,
  startDate,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  userName,
  imageSource,
  reviewMean,
  refetchData,
}: Props) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [showAcceptQuestionModal, setShowAcceptQuestionModal] = useState<boolean>(false);
  const [showDeclineQuestionModal, setDeclineAcceptQuestionModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showInfoModalDecline, setShowInfoModalDecline] = useState<boolean>(false);
  const [showInfoModalAccept, setShowInfoModalAccept] = useState<boolean>(false);

  const onAccept = async () => {
    setShowAcceptQuestionModal(false);

    await ridesClient
      .post<unknown>(
        `requests/${requestId}/decision/`,
        { decision: 'accepted' },
        {
          headers: { Authorization: 'Bearer ' + token },
        },
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setText('Accepted request successfully');
      })
      .catch((error) => {
        setText(error.request.response.slice(1, -1));
      });

    setShowInfoModalAccept(true);
  };

  const close = () => {
    if (currentPage === 1) {
      refetchData();
    } else {
      setCurrentPage(1);
    }
    setShowInfoModalAccept(false);
  };

  const onDecline = async () => {
    setDeclineAcceptQuestionModal(false);

    await ridesClient
      .post<unknown>(
        `requests/${requestId}/decision/`,
        { decision: 'declined' },
        {
          headers: { Authorization: 'Bearer ' + token },
        },
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setShowInfoModalDecline(true);
        setText(data as string);
      })
      .catch((error) => {
        setShowInfoModalDecline(true);
        setText(error.request.response.slice(1, -1));
      });
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
          <StyledButton
            onClick={handleDetailsView}
            className='details-button'
          >
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
          <ButtonsWrapper>
            <MediumSecondaryButton
              size='medium'
              onClick={() => setDeclineAcceptQuestionModal(true)}
              className='decline-medium-button'
            >
              decline
            </MediumSecondaryButton>
            <SmallSecondaryButton
              size='small'
              onClick={() => setDeclineAcceptQuestionModal(true)}
              className='decline-small-button'
            >
              decline
            </SmallSecondaryButton>
            <MediumPrimaryButton
              size='medium'
              onClick={() => setShowAcceptQuestionModal(true)}
              className='accept-medium-button'
            >
              accept
            </MediumPrimaryButton>
            <SmallPrimaryButton
              size='small'
              onClick={() => setShowAcceptQuestionModal(true)}
              className='accept-small-button'
            >
              accept
            </SmallPrimaryButton>
          </ButtonsWrapper>
        </SecondInnerWrapper>
      </Wrapper>
      {showAcceptQuestionModal && (
        <Modal
          open={showAcceptQuestionModal}
          title='Accept pending request'
          text='Are you sure you want to accept this request?'
          handleOpen={() => setShowAcceptQuestionModal(true)}
          handleClose={() => setShowAcceptQuestionModal(false)}
          primaryButtonText='Accept'
          primaryButtonAction={onAccept}
          showButtonForOpeningModal={false}
          secondaryButtonText='Cancel'
          secondaryButtonAction={() => setShowAcceptQuestionModal(false)}
        />
      )}
      {showDeclineQuestionModal && (
        <Modal
          open={showDeclineQuestionModal}
          title='Decline pending request'
          text='Are you sure you want to decline this request?'
          handleOpen={() => setDeclineAcceptQuestionModal(true)}
          handleClose={() => setDeclineAcceptQuestionModal(false)}
          primaryButtonText='Decline'
          primaryButtonAction={onDecline}
          showButtonForOpeningModal={false}
          secondaryButtonText='Cancel'
          secondaryButtonAction={() => setDeclineAcceptQuestionModal(false)}
        />
      )}
      {showInfoModalDecline && (
        <Modal
          open={showInfoModalDecline}
          title='Request declination'
          text={text}
          handleOpen={() => setShowInfoModalDecline(true)}
          handleClose={() => {
            setShowInfoModalDecline(false);
            refetchData();
          }}
          primaryButtonText='Okay'
          primaryButtonAction={() => {
            setShowInfoModalDecline(false);
            refetchData();
          }}
          showButtonForOpeningModal={false}
        />
      )}
      {showInfoModalAccept && (
        <Modal
          open={showInfoModalAccept}
          title='Request acceptance'
          text={text}
          handleOpen={() => setShowInfoModalAccept(true)}
          handleClose={close}
          primaryButtonText='Okay'
          primaryButtonAction={close}
          showButtonForOpeningModal={false}
        />
      )}
    </>
  );
};
