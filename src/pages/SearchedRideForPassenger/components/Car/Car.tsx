import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { Wrapper, CarImage, StyledText } from './Car.style';

interface Props {
  isLoading: boolean;
  carDescription: string | undefined;
}

export const Car = ({ isLoading, carDescription }: Props) => {
  if (isLoading || !carDescription) {
    return (
      <Skeleton
        variant='rectangular'
        height={110}
        width={50}
      />
    );
  } else {
    return (
      <Wrapper>
        <CarImage />
        <StyledText variant='h4'>Vehicle: </StyledText>
        <Typography variant='h4'>{carDescription}</Typography>
      </Wrapper>
    );
  }
};
