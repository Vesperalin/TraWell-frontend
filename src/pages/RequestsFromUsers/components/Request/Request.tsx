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
  isCar: boolean;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  detailsPath: Paths;
  userName: string;
  imageSource: string;
  reviewMean: number;
}

export const Request = ({
  startDate,
  isCar,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  detailsPath,
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
          isCar={isCar}
          placeFrom={placeFrom}
          exactPlaceFrom={exactPlaceFrom}
          lengthInMinutes={lengthInMinutes}
          placeTo={placeTo}
          exactPlaceTo={exactPlaceTo}
        />
        <StyledLink
          style={{ textDecoration: 'none' }}
          to={detailsPath}
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
