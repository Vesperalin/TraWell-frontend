import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledBox = styled(Box)({
  flexGrow: '1',
  height: '80px',
  display: 'flex',
});

export const StyledLink = styled(Link)({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.common.blue,
  padding: '10px',
  paddingTop: '15px',
  paddingBottom: '15px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.common.dimmedWhite,
  },
  '&:active': {
    backgroundColor: '#F3F5F7',
  },
}));
