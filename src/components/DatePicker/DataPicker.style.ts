import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  datePicker: {
    borderRadius: '10px',
    backgroundColor: theme.palette.common.dimmedWhite,
    color: theme.palette.common.darkNavy,
    minWidth: '265px',
  },
}));

export { useStyles };
