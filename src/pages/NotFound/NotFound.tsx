import { useNavigate } from 'react-router';
import pageNotFound from '~/assets/images/page_not_found.webp';
import { Paths } from '~/enums/Paths';
import { Wrapper, StyledImage, StyledDesktopButton, StyledMobileButton } from './NotFound.style';

export const NotFound = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(Paths.Home);
  };

  return (
    <Wrapper>
      <StyledImage
        alt='not found page'
        src={pageNotFound}
      />
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
    </Wrapper>
  );
};
