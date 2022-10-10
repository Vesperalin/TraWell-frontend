import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  '& > svg': {
    cursor: 'pointer',
    color: 'gray',
    opacity: 0.8,
  },
  marginLeft: '10px',
  borderRadius: '20px',

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const CloseWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',

  '& svg:hover': {
    cursor: 'pointer',
  },
});

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const FilterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  maxWidth: '280px',
  width: '100%',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '10px',
}));

export { useStyles };
