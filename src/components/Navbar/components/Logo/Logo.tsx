import logo from '~/assets/images/logo.webp';
import { Paths } from '~/enums/Paths';
import { StyledLogo, StyledLink } from './Logo.style';

export const Logo = () => {
  return (
    <StyledLink to={Paths.Home}>
      <StyledLogo
        alt='Logo'
        src={logo}
      />
    </StyledLink>
  );
};
