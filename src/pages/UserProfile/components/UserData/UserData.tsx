import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
  review: string;
  age: number;
  name: string;
}

export const UserData = ({ src, altText, review, age, name }: Props) => {
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
      <NameAndSurnameTypography variant='h3'>{name}</NameAndSurnameTypography>
      <AgeTypography variant='h5'>Age: {age}</AgeTypography>
    </Box>
  );
};
