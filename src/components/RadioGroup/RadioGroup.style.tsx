import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/system';

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-root': {
    color: theme.palette.common.dimmedWhite,
    fontWeight: '500',
  },
}));

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
