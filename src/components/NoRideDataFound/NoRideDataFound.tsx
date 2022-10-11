import { useNavigate } from 'react-router-dom';
import ridesNotFound from '~/assets/images/no_rides_found.webp';
import { Paths } from '~/enums/Paths';
import {
  StyledImage,
  Wrapper,
  StyledTypography,
  StyledDesktopButton,
  StyledMobileButton,
} from './NoRideDataFound.style';

interface Props {
  placeFrom: string;
  placeTo: string;
}

export const NoRideDataFound = ({ placeFrom, placeTo }: Props) => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(Paths.Home);
  };

  return (
    <Wrapper>
      <StyledImage
        alt='not rides found'
        src={ridesNotFound}
      />
      <StyledTypography variant='h5'>
        No rides found from: <span>{placeFrom}</span> to <span>{placeTo}</span>
      </StyledTypography>
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
