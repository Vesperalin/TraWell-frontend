import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
  },
}));

export const Text = styled(Typography)(
  ({ theme }) => `
  overflow-wrap: break-word;
  margin: 2px 0;
  font-weight: 500;
  span {
    color: ${theme.palette.common.navy}
  }
`,
);
