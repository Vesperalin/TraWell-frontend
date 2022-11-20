import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '90%',
  display: 'flex',
  columnGap: '40px',
  flexWrap: 'wrap',
});

export const LeftWrapper = styled(Box)({
  flexGrow: '1',
  marginBottom: '40px',
});

export const RightWrapper = styled(Box)({ flexGrow: '1' });

export const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.darkNavy,
  display: 'inline-block',
  marginBottom: '15px',
}));
