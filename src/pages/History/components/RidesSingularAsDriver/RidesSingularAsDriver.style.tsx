import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const SortAndFiltersComponent = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '40px',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
  },
}));

export const Content = styled(Box)({
  width: '100%',
  display: 'flex',
  gap: '30px',
  marginTop: '15px',
});

export const PaginationWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '50px',

  [theme.breakpoints.down('md')]: {
    marginTop: '30px',
  },
}));

export const NoRidesWrapper = styled(Box)({
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'center',
});

export const Rides = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});
