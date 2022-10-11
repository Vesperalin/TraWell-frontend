import { ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
}));
