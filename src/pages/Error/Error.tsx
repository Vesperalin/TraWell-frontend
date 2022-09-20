import Box from '@mui/material/Box';
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

interface LocationState {
  state: {
    text: string;
  };
}

export const Error = () => {
  const navigate = useNavigate();
  // const { state } = useLocation().state as LocationState;
  // const { text } = state;

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
        <StyledText variant='h5'>
          Here will be text that describes the error in greater details. It will be send using
          navigate from react router
        </StyledText>
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
