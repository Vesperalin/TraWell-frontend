import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled('div')({
  padding: 0,
  margin: 0,
  width: '100vw',
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const Container = styled('div')({
  padding: 0,
  margin: 0,
  flexGrow: '1',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Content = styled('div')({
  margin: 0,
  maxWidth: '1200px',
  width: '100%',
  padding: '30px 15px 20px 15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const LoadingWrapper = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
