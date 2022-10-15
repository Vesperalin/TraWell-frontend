import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  input: {
    backgroundColor: theme.palette.common.dimmedWhite,
    color: theme.palette.common.darkNavy,
    minWidth: '270px',
    borderRadius: '10px',

    [theme.breakpoints.down('md')]: {
      minWidth: 'auto',
      maxWidth: '150px',
    },
  },
}));

export { useStyles };
