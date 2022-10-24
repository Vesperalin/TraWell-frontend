import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '~/enums/Paths';
import { useAuth } from '~/hooks/useAuth';
import { Avatar } from './components/Avatar';
import { StyledMenu, StyledMenuItem, StyledTypography } from './User.style';

// TODO change data about user
// TODO change paths in the future
const settings = [
  {
    key: 'account_settings',
    name: 'Account settings',
    path: Paths.Home,
    icon: <SettingsOutlinedIcon />,
  },
  {
    key: 'my_profile',
    name: 'My profile',
    path: `/profile/${1}`,
    icon: <AccountCircleOutlinedIcon />,
  },
  { key: 'history', name: 'History', path: Paths.Home, icon: <HistoryOutlinedIcon /> },
  { key: 'logout', name: 'Log out', path: Paths.Home, icon: <LogoutOutlinedIcon /> },
];

export const User = () => {
  const { logout } = useAuth();
  const [anchorElementUser, setAnchorElementUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElementUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElementUser(null);
  };

  return (
    <Box>
      <Tooltip title='Open settings'>
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alternativeText='Ondrej Siemianowski'
            src='https://minimaltoolkit.com/images/randomdata/male/1.jpg'
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
            style={{ textDecoration: 'none' }}
            key={setting.key}
            to={setting.path}
            {...(setting.key === settings[3].key ? { onClick: () => logout() } : {})}
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
