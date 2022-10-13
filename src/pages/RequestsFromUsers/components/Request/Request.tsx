import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Dayjs } from 'dayjs';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { User } from '~/components/User';
import { Paths } from '~/enums/Paths';
import {
  Wrapper,
  FirstInnerWrapper,
  SecondInnerWrapper,
  StyledLink,
  MediumPrimaryButton,
  SmallPrimaryButton,
  MediumSecondaryButton,
  SmallSecondaryButton,
  ButtonsWrapper,
} from './Request.style';

interface Props {
  startDate: Dayjs;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  userName: string;
  imageSource: string;
  reviewMean: number;
}

export const Request = ({
  startDate,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  userName,
  imageSource,
  reviewMean,
}: Props) => {
  const onAccept = () => {
    console.log('onAccept');
  };

  const onReject = () => {
    console.log('onReject');
  };

  return (
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
        <StyledLink
          style={{ textDecoration: 'none' }}
          to={Paths.Home}
        >
          details
          <ArrowForwardIcon fontSize='small' />
        </StyledLink>
      </FirstInnerWrapper>
      <SecondInnerWrapper>
        <User
          isAvatarFirstDesktop={false}
          name={userName}
          imageSource={imageSource}
          reviewMean={reviewMean}
        />
        <ButtonsWrapper>
          <MediumSecondaryButton
            size='medium'
            onClick={onReject}
          >
            reject
          </MediumSecondaryButton>
          <SmallSecondaryButton
            size='small'
            onClick={onReject}
          >
            reject
          </SmallSecondaryButton>
          <MediumPrimaryButton
            size='medium'
            onClick={onAccept}
          >
            accept
          </MediumPrimaryButton>
          <SmallPrimaryButton
            size='small'
            onClick={onAccept}
          >
            accept
          </SmallPrimaryButton>
        </ButtonsWrapper>
      </SecondInnerWrapper>
    </Wrapper>
  );
};
