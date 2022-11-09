import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { Wrapper, Time, Date, TimeWrapper, StyledButton } from './Ride.style';

interface Props {
  date: string;
  id: number;
}

export const Ride = ({ date, id }: Props) => {
  const navigate = useNavigate();
  const transformedStartYear = dayjs(date).year();
  const transformedStartMonth = transformToDoubleDigit(dayjs(date).month() + 1);
  const transformedStartDay = transformToDoubleDigit(dayjs(date).date());
  const transformedStartHour = transformToDoubleDigit(dayjs(date).hour());
  const transformedStartMinutes = transformToDoubleDigit(dayjs(date).minute());

  const handleDetailsView = () => {
    navigate(`/searched-ride/${id}`, {
      state: {
        showButton: false,
      },
    });
  };

  return (
    <Wrapper>
      <TimeWrapper>
        <Date variant='h4'>
          {transformedStartDay}.{transformedStartMonth}.{transformedStartYear}
        </Date>
        <Time variant='h4'>
          {transformedStartHour}:{transformedStartMinutes}
        </Time>
      </TimeWrapper>
      <StyledButton onClick={handleDetailsView}>
        details
        <ArrowForwardIcon fontSize='small' />
      </StyledButton>
    </Wrapper>
  );
};
