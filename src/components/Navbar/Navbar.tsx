import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Paths } from '~/enums/Paths';
import { DesktopMenu } from './components/DesktopMenu';
import { Logo } from './components/Logo';
import { MobileMenu } from './components/MobileMenu';
import { User } from './components/User';
import { StyledAppBar, MobileWrapper, DesktopWrapper } from './Navbar.style';

// TODO change paths in the future
const pages = [
  { name: 'Pending requests', path: Paths.Home },
  { name: 'My requests', path: Paths.Home },
  { name: 'My rides', path: Paths.Home },
  { name: 'Post a ride', path: Paths.Home },
];

export const Navbar = () => {
  return (
    <StyledAppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MobileWrapper>
            <MobileMenu pages={pages} />
            <Logo />
            <User />
          </MobileWrapper>

          <DesktopWrapper>
            <Logo />
            <DesktopMenu pages={pages} />
            <User />
          </DesktopWrapper>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
