import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  maxWidth: '300px',
}));

export const StyledToggleButton = styled(ToggleButton)({
  maxWidth: '44px',
});
