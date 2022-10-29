import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/system';

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.common.dimmedWhite,
}));

export const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.MuiRadio-root': {
    color: theme.palette.common.dimmedWhite,
  },

  '&.Mui-checked': {
    color: theme.palette.common.dimmedWhite,
  },
}));
