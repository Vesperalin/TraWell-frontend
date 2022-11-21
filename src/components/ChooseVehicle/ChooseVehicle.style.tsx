import { Skeleton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/system';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: '270px',
  backgroundColor: theme.palette.common.dimmedWhite,
  borderRadius: '10px',
  flexGrow: '1',
}));

export const StyledSkeleton = styled(Skeleton)({
  width: '100%',
});
