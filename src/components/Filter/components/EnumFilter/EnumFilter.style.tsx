import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/system';

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  '&.MuiFormLabel-root': {
    color: theme.palette.common.darkNavy,
    fontWeight: '500',
  },
}));

export const StyledFormControlLabel = styled(FormControlLabel)({
  margin: '-4px 0',
});

export const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    color: theme.palette.common.navy,
  },
}));
