import Typography from '@mui/material/Typography';
import { Wrapper, Label, StyledSkeleton } from './Description.style';

interface Props {
  isLoading: boolean;
  value: string | undefined;
}

export const Description = ({ isLoading, value }: Props) => {
  if (isLoading) {
    return (
      <Wrapper>
        <StyledSkeleton
          variant='rectangular'
          height={150}
        />
      </Wrapper>
    );
  } else if (value && value?.length > 0) {
    return (
      <Wrapper>
        <Label variant='h5'>Note from driver</Label>
        <Typography variant='h5'>{value}</Typography>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};
