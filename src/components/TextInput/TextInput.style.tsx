import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  extraPlaceTextField: {
    backgroundColor: theme.palette.common.dimmedWhite,
    borderRadius: '10px',
    width: '100%',

    '& fieldset legend span': {
      display: 'none !important',
      opacity: '0 !important',
      visibility: 'hidden',
    },
  },

  focused: {
    color: 'transparent !important',
    zIndex: '-100',
    width: '0px',
    height: '0px',
  },
}));
