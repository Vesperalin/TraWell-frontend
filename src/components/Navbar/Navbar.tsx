import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Role } from '~/enums/Role';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { AuthorizedElement } from '../AuthorizedElement';
import { DesktopMenu } from './components/DesktopMenu';
import { Logo } from './components/Logo';
import { MobileMenu } from './components/MobileMenu';
import { User } from './components/User';
import { StyledAppBar, MobileWrapper, DesktopWrapper } from './Navbar.style';

const initialPages = [
  {
    mobileId: 'pending-requests-mobile',
    desktopId: 'pending-requests-desktop',
    name: 'Pending requests',
    path: '/pending-requests/1',
  },
  {
    mobileId: 'my-requests-mobile',
    desktopId: 'my-requests-desktop',
    name: 'My requests',
    path: '/my-requests/1',
  },
  {
    mobileId: 'my-rides-mobile',
    desktopId: 'my-rides-desktop',
    name: 'My rides',
    path: '/own-rides/0/1',
  },
  {
    mobileId: 'post-a-ride-mobile',
    desktopId: 'post-a-ride-desktop',
    name: 'Post a ride',
    path: Paths.ChooseRideType,
  },
];

export const Navbar = () => {
  const { login, hasRole } = useAuth();
  const [pages, setPages] =
    useState<{ name: string; path: Paths | string; mobileId: string; desktopId: string }[]>(
      initialPages,
    );

  useEffect(() => {
    const check = async () => {
      if (await hasRole(Role.Company)) {
        setPages((prevPages) => {
          return prevPages.filter((page) => page.name !== 'My requests');
        });
      }
    };
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                    id='login-button-mobile'
                    label='Login'
                    onClick={() => login()}
                    desktopSize={Sizes.Medium}
                    mobileSize={Sizes.Small}
                  />
                </div>
              }
            >
              <User
                id='icon-settings-mobile'
                isMobile={true}
              />
            </AuthorizedElement>
          </MobileWrapper>
          <DesktopWrapper>
            <Logo />
            <AuthorizedElement
              elementToPutInstead={
                <div>
                  <PrimaryButton
                    id='login-button-desktop'
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
                <User
                  id='icon-settings-desktop'
                  isMobile={false}
                />
              </>
            </AuthorizedElement>
          </DesktopWrapper>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};
