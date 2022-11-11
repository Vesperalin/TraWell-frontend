import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { calculateAge } from '~/utils/CalculateAge';
import {
  Wrapper,
  Avatar,
  AgeTypography,
  NameTypography,
  MediumIcon,
  SmallIcon,
  ReviewWrapper,
} from './User.style';

interface Props {
  dateOfBirth: string;
  name: string;
  imageSource: string;
  reviewMean: number;
}

export const User = ({ dateOfBirth, name, imageSource, reviewMean }: Props) => {
  const age = calculateAge(new Date(dateOfBirth));

  return (
    <Wrapper>
      <Box>
        <Avatar
          src={imageSource}
          alt={name}
        />
      </Box>
      <Box>
        <NameTypography variant='h3'>{name}</NameTypography>
        <AgeTypography variant='h5'>Age: {age}</AgeTypography>
        <ReviewWrapper>
          <Typography variant='h4'>{reviewMean}</Typography>
          <MediumIcon fontSize='medium' />
          <SmallIcon fontSize='small' />
        </ReviewWrapper>
      </Box>
    </Wrapper>
  );
};
