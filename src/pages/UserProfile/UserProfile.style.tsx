import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  width: '90%',
});

export const StyledProfileWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  borderBottom: '1px solid rgba(6, 40, 61, 0.2)',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',

  button: {
    alignSelf: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '15px',
    justifyContent: 'flex-start',
    padding: '0 10px 20px 10px',
  },
}));

export const StyledUserWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

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

export const Comments = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export const NoCommentsWrapper = styled(Box)({
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'center',
});
