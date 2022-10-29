import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

type Props = {
  hide: boolean;
};

export const useStyles = makeStyles<Theme, Props>((theme: Theme) => ({
  extraPlaceTextField: {
    backgroundColor: theme.palette.common.dimmedWhite,
    borderRadius: '10px',
    width: '100%',

    '& fieldset legend span': {
      display: 'none !important',
      opacity: '0 !important',
      visibility: 'hidden',
    },

    '& > label': {
      display: ({ hide }) => (hide ? 'none' : 'inline-block'),
    },
  },

  focused: {
    color: 'transparent !important',
    zIndex: '-100',
    width: '0px',
    height: '0px',
  },
}));
