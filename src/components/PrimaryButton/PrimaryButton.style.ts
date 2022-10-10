import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const StyledPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  color: theme.palette.common.dimmedWhite,
  alignSelf: 'start',

  '&:hover': {
    backgroundColor: '#36A4EE',
  },
}));
