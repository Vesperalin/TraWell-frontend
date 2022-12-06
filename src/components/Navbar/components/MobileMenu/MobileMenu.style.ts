import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.common.blue,
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.blue,
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  '&.active': {
    backgroundColor: theme.palette.common.dimmedWhite,
  },
}));
