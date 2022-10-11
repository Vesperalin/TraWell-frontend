import { useLocation, useNavigate } from 'react-router-dom';
import error from '~/assets/images/error.webp';
import { Paths } from '~/enums/Paths';
import {
  Wrapper,
  StyledImage,
  StyledDesktopButton,
  StyledMobileButton,
  StyledHeading,
  StyledText,
  InnerWrapper,
} from './Error.style';

export const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const text =
    location.state !== null && location.state
      ? (location.state as { text: string }).text
      : 'Something went wrong!';

  const goToHomePage = () => {
    navigate(Paths.Home);
  };

  return (
    <Wrapper>
      <StyledImage
        alt='error'
        src={error}
      />
      <InnerWrapper>
        <StyledHeading>Oops!</StyledHeading>
        <StyledText variant='h5'>{text}</StyledText>
        <StyledDesktopButton
          variant='contained'
          size='large'
          onClick={goToHomePage}
        >
          Get back home
        </StyledDesktopButton>
        <StyledMobileButton
          variant='contained'
          size='medium'
          onClick={goToHomePage}
        >
          Get back home
        </StyledMobileButton>
      </InnerWrapper>
    </Wrapper>
  );
};
