import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

export const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const Text = styled(Typography)(
  ({ theme }) => `
  margin: 2px 0;
  font-weight: 500;
  span {
    color: ${theme.palette.common.navy}
  }
`,
);
