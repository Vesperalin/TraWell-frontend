import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { useAuth } from '~/hooks/useAuth';
import { calculateAge } from '~/utils/CalculateAge';
import {
  StyledUserWrapper,
  AvatarAndReviewWrapper,
  AvatarWrapper,
  Avatar,
  MediumIcon,
  SmallIcon,
  ReviewWrapper,
  NameAndSurnameTypography,
  AgeTypography,
} from './UserData.style';

export const UserData = () => {
  const { token } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decodedToken = jwt_decode<any>(token ? token : '');
  const age = calculateAge(new Date(decodedToken.date_of_birth));

  return (
    <Box>
      <StyledUserWrapper>
        <AvatarAndReviewWrapper>
          <AvatarWrapper>
            <Avatar
              src={decodedToken.picture ? decodedToken.picture.toString() : ''}
              alt={decodedToken.name}
            />
          </AvatarWrapper>
          <ReviewWrapper>
            <Typography variant='h4'>4.5</Typography>
            <MediumIcon fontSize='medium' />
            <SmallIcon fontSize='small' />
          </ReviewWrapper>
        </AvatarAndReviewWrapper>
      </StyledUserWrapper>
      <NameAndSurnameTypography variant='h3'>{decodedToken.name}</NameAndSurnameTypography>
      <AgeTypography variant='h5'>Age: {age}</AgeTypography>
    </Box>
  );
};
