import { InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledInputLabel = styled(InputLabel)({
  // color: '#FFFFFF',
});

export const StyledTextField = styled(TextField)({
  '& legend': { display: 'none' },
  '& fieldset': { top: 0 },
});
