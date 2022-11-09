import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RidesService from '~/api/services/RidesService';
import { Modal } from '~/components/Modal';
import { useAuth } from '~/hooks/useAuth';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { Wrapper, Time, Date, InnerWrapper, StyledButton } from './Ride.style';

interface Props {
  date: string;
  id: number;
  refetchSingular: () => void;
}

export const Ride = ({ date, id, refetchSingular }: Props) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const transformedStartYear = dayjs(date).year();
  const transformedStartMonth = transformToDoubleDigit(dayjs(date).month() + 1);
  const transformedStartDay = transformToDoubleDigit(dayjs(date).date());
  const transformedStartHour = transformToDoubleDigit(dayjs(date).hour());
  const transformedStartMinutes = transformToDoubleDigit(dayjs(date).minute());
  const { refetch, isError } = RidesService.useDeleteSingularRide(id, token ? token : '');
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);

  const handleDelete = () => {
    refetch();
    setShowQuestionModal(false);

    if (isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setText('Something went wrong. Ride was not deleted');
    } else {
      setText('Ride deleted successfully');
    }
    setShowInfoModal(true);
  };

  const handleEdit = () => {
    navigate(`/edit-singular-ride/${id}`);
  };

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Date variant='h4'>
            {transformedStartDay}.{transformedStartMonth}.{transformedStartYear}
          </Date>
          <Time variant='h4'>
            {transformedStartHour}:{transformedStartMinutes}
          </Time>
        </InnerWrapper>
        <InnerWrapper>
          <StyledButton onClick={() => setShowQuestionModal(true)}>
            delete
            <ArrowForwardIcon fontSize='small' />
          </StyledButton>
          <StyledButton onClick={handleEdit}>
            edit
            <ArrowForwardIcon fontSize='small' />
          </StyledButton>
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
          primaryButtonAction={() => {
            refetchSingular();
            setShowInfoModal(false);
          }}
          showButtonForOpeningModal={false}
        />
      )}
    </>
  );
};
