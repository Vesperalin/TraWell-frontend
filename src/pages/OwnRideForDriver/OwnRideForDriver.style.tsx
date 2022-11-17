import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  paddingBottom: '20px',
  gap: '30px',
});

export const ColumnsWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '20px',
});

export const LeftColumnWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '30px',
  maxWidth: '75%',
});

export const RightColumnWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '30px',
  alignItems: 'flex-end',

  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    width: '100%',
  },
}));

export const BackButton = styled(Button)(({ theme }) => ({
  margin: '10px 0 0 0',
  alignSelf: 'flex-start',
  paddingLeft: '0',
  backgroundColor: 'transparent',
  color: theme.palette.common.darkNavy,
  opacity: '0.5',

  '&:hover': {
    backgroundColor: 'transparent',
    color: '#05172C',
    opacity: '0.7',
  },

  [theme.breakpoints.down('sm')]: {
    margin: '5px 0 0 0',
  },
}));

export const AdditionalDataWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const SeatsText = styled(Typography)(({ theme }) => ({
  fontWeight: '400',

  span: {
    color: theme.palette.common.navy,
  },
}));
