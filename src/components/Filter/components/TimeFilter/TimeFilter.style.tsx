import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  timePicker: {
    borderRadius: '10px',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.darkNavy,
    width: '100%',
  },
}));

export { useStyles };
