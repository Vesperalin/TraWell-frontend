import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.common.blue,
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.blue,
}));
