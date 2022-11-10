import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '100%',
});

export const InnerWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const Date = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
}));

export const Time = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.dimmedWhite,
  fontWeight: '300',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.common.darkNavy,
  opacity: '0.5',
  fontWeight: '500',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  paddingLeft: '0 !important',
  paddingRight: '0 !important',
  paddingBottom: '0 !important',

  '&:hover': {
    opacity: '0.6',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));
