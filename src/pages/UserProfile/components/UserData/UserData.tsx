import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { useAuth } from '~/hooks/useAuth';
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

interface Props {
  src: string;
  altText: string;
  review: number;
  age: number;
}

export const UserData = ({ src, altText, review, age }: Props) => {
  const { token } = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decodedToken = jwt_decode<any>(token ? token : '');
  return (
    <Box>
      <StyledUserWrapper>
        <AvatarAndReviewWrapper>
          <AvatarWrapper>
            <Avatar
              src={src}
              alt={altText}
            />
          </AvatarWrapper>
          <ReviewWrapper>
            <Typography variant='h4'>{review}</Typography>
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
