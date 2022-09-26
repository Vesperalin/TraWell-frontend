import { InputLabel, TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledTextField = styled(TextField)({
  '& legend': { display: 'none' },
  '& fieldset': { top: 0 },
});

export const StyledInputLabel = styled(InputLabel)({
  // color: '#FFFFFF',
});
