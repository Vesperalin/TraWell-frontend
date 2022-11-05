import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { AuthorizedElement } from '../AuthorizedElement';
import { DesktopMenu } from './components/DesktopMenu';
import { Logo } from './components/Logo';
import { MobileMenu } from './components/MobileMenu';
import { User } from './components/User';
import { StyledAppBar, MobileWrapper, DesktopWrapper } from './Navbar.style';

const pages = [
  { name: 'Pending requests', path: '/pending-requests/1' },
  { name: 'My requests', path: '/my-requests/1' },
  { name: 'My rides', path: '/own-rides/1' },
  { name: 'Post a ride', path: Paths.ChooseRideType },
];

export const Navbar = () => {
  const { login } = useAuth();

  return (
    <StyledAppBar position='sticky'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <MobileWrapper>
            <AuthorizedElement>
              <MobileMenu pages={pages} />
            </AuthorizedElement>
            <Logo />
            <AuthorizedElement
              elementToPutInstead={
                <div>
                  <PrimaryButton
                    label='Login'
                    onClick={() => login()}
                    desktopSize={Sizes.Medium}
                    mobileSize={Sizes.Small}
                  />
                </div>
              }
            >
              <User />
            </AuthorizedElement>
          </MobileWrapper>
          <DesktopWrapper>
            <Logo />
            <AuthorizedElement
              elementToPutInstead={
                <div>
                  <PrimaryButton
                    label='Login'
                    onClick={() => login()}
                    desktopSize={Sizes.Medium}
                    mobileSize={Sizes.Small}
                  />
                </div>
              }
            >
              <>
                <DesktopMenu pages={pages} />
                <User />
              </>
            </AuthorizedElement>
          </DesktopWrapper>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
