import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  autocomplete: {
    width: '425px',
    borderRadius: '10px',
    backgroundColor: theme.palette.common.white,
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.common.blue,
  },
}));

export const InputWrapper = styled(Grid)({
  alignItems: 'center',
});

export const InnerBox = styled(Box)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  marginRight: '16px',
}));

export { useStyles };
