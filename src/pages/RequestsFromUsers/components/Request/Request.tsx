import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import dayjs from 'dayjs';
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

export const Request = () => {
  return (
    <Wrapper>
      <FirstInnerWrapper>
        <TimeLocationOfRide
          startDate={dayjs()}
          isCar={false}
          placeFrom='Wadowice'
          exactPlaceFrom='pomnik JP2'
          lengthInMinutes={40}
          placeTo='Radomsko'
          exactPlaceTo='dom sołtysa'
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
          name='Krzysztof'
          imageSource='https://minimaltoolkit.com/images/randomdata/male/3.jpg'
          reviewMean={4.3}
        />
        <ButtonsWrapper>
          <MediumSecondaryButton size='medium'>reject</MediumSecondaryButton>
          <SmallSecondaryButton size='small'>reject</SmallSecondaryButton>
          <MediumPrimaryButton size='medium'>accept</MediumPrimaryButton>
          <SmallPrimaryButton size='small'>accept</SmallPrimaryButton>
        </ButtonsWrapper>
      </SecondInnerWrapper>
    </Wrapper>
  );
};
