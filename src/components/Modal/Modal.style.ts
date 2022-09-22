import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const StyledModal = styled(Modal)({
  cursor: 'pointer',
});

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '600px',
  backgroundColor: theme.palette.common.darkNavy,
  padding: '50px',
  color: theme.palette.common.dimmedWhite,
  borderRadius: '15px',
  cursor: 'auto',
  textAlign: 'justify',

  [theme.breakpoints.down('md')]: {
    width: '500px',
    padding: '40px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '280px',
    padding: '30px',
  },
}));

export const ButtonsStyledBox = styled(Box)(({ theme }) => ({
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '20px',

  [theme.breakpoints.down('md')]: {
    marginTop: '25px',
  },

  [theme.breakpoints.down('sm')]: {
    marginTop: '20px',
  },
}));

export const StyledHeader = styled(Typography)({
  marginBottom: '10px',
});

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.dimmedWhite,
  color: theme.palette.common.darkNavy,

  '&:hover': {
    backgroundColor: '#D4D6D8',
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.darkNavy,
  color: theme.palette.common.dimmedWhite,
  borderColor: theme.palette.common.dimmedWhite,

  '&:hover': {
    borderColor: '#C3C5C7',
    color: '#C3C5C7',
  },
}));
