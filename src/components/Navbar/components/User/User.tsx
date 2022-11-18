import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UsersService from '~/api/services/UsersService';
import { Paths } from '~/enums/Paths';
import { useAuth } from '~/hooks/useAuth';
import { Avatar } from './components/Avatar';
import { StyledMenu, StyledMenuItem, StyledTypography } from './User.style';

interface Props {
  id: string;
  isMobile: boolean;
}

export const User = ({ id, isMobile }: Props) => {
  const { logout, token } = useAuth();
  const [anchorElementUser, setAnchorElementUser] = useState<null | HTMLElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decodedToken = jwt_decode<any>(token ? token : '');
  const { data, refetch } = UsersService.useGetMyId(token ? token : '');

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [refetch, token]);

  const settings = [
    {
      key: 'account_settings',
      mobileId: 'account-settings-mobile-button',
      desktopId: 'account-settings-desktop-button',
      name: 'Account settings',
      path: Paths.Home,
      icon: <SettingsOutlinedIcon />,
    },
    {
      key: 'my_profile',
      name: 'My profile',
      mobileId: 'my-profile-mobile-button',
      desktopId: 'my-profile-desktop-button',
      path: '/profile/' + data?.user_id + '/1',
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      key: 'history',
      name: 'History',
      mobileId: 'history-mobile-button',
      desktopId: 'history-desktop-button',
      path: '/history-rides/0/1',
      icon: <HistoryOutlinedIcon />,
    },
    {
      key: 'logout',
      name: 'Log out',
      mobileId: 'logout-mobile-button',
      desktopId: 'logout-desktop-button',
      path: Paths.Home,
      icon: <LogoutOutlinedIcon />,
    },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElementUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElementUser(null);
  };

  return (
    <Box>
      <Tooltip title='Open settings'>
        <IconButton
          onClick={handleOpenUserMenu}
          id={id}
        >
          <Avatar
            alternativeText={decodedToken.name}
            src={decodedToken.picture ? decodedToken.picture.toString() : ''}
          />
        </IconButton>
      </Tooltip>
      <StyledMenu
        id='menu-appbar'
        anchorEl={anchorElementUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElementUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <Link
            id={isMobile ? setting.mobileId : setting.desktopId}
            style={{ textDecoration: 'none' }}
            key={setting.key}
            to={setting.path}
            {...(setting.key === settings[3].key
              ? { onClick: () => logout({ redirectUri: Paths.Home }) }
              : {})}
          >
            <StyledMenuItem onClick={handleCloseUserMenu}>
              {setting.icon}
              <StyledTypography variant='subtitle2'>{setting.name}</StyledTypography>
            </StyledMenuItem>
          </Link>
        ))}
      </StyledMenu>
    </Box>
  );
};
