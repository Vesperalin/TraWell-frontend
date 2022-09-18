import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import error from '~/assets/images/error.webp';
import { Paths } from '~/enums/Paths';
import { Wrapper, StyledImage, StyledDesktopButton, StyledMobileButton } from './Error.style';

export const Error = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(Paths.Home);
  };

  return (
    <Wrapper>
      <StyledImage
        alt='error'
        src={error}
      />
      <Box>
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
      </Box>
    </Wrapper>
  );
};
