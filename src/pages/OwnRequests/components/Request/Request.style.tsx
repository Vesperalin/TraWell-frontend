/* eslint-disable indent */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { RequestStatus } from '~/enums/RequestStatus';
import { Props } from './Request';

type StyleProps = Pick<Props, 'requestStatus'>;

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '30px',
  backgroundColor: theme.palette.common.dimmedWhite,
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '15px',
  maxWidth: '675px',
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const FirstInnerWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const SecondInnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '160px',

  [theme.breakpoints.down('sm')]: {
    marginTop: '10px',
    height: 'auto',
    gap: '10px',
    width: '100%',
  },
}));

export const StatusWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'requestStatus',
})<StyleProps>(({ theme, requestStatus }) => ({
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flexGrow: '1',
  justifyContent: requestStatus === RequestStatus.Rejected ? 'flex-start' : 'space-between',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0',
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.common.darkNavy,
  opacity: '0.5',
  fontWeight: '500',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const MediumPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  color: theme.palette.common.dimmedWhite,
  width: '80px',

  '&:hover': {
    backgroundColor: '#36A4EE',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SmallPrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.blue,
  color: theme.palette.common.dimmedWhite,
  display: 'none',
  width: '70px',

  '&:hover': {
    backgroundColor: '#36A4EE',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const StatusText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'requestStatus',
})<StyleProps>(({ theme, requestStatus }) => ({
  span: {
    color:
      requestStatus === RequestStatus.Pending
        ? theme.palette.common.navy
        : requestStatus === RequestStatus.Accepted
        ? theme.palette.common.green
        : theme.palette.common.darkRed,
  },
}));
