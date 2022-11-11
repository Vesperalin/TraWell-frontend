import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  icon: {
    color: theme.palette.common.dimmedWhite,
    opacity: '0.7',
  },
}));

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
  fontWeight: '400',
}));
