import Typography from '@mui/material/Typography';
import {
  StyledUserDataWrapper,
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

// TODO: use data about users from API

export const UserData = () => {
  return (
    <StyledUserDataWrapper>
      <StyledUserWrapper>
        <AvatarAndReviewWrapper>
          <AvatarWrapper>
            <Avatar
              src='https://minimaltoolkit.com/images/randomdata/male/3.jpg'
              alt='user avatar'
            />
          </AvatarWrapper>
          <ReviewWrapper>
            <Typography variant='h4'>4.5</Typography>
            <MediumIcon fontSize='medium' />
            <SmallIcon fontSize='small' />
          </ReviewWrapper>
        </AvatarAndReviewWrapper>
      </StyledUserWrapper>
      <NameAndSurnameTypography variant='h3'>Andrzej Andrzejewski</NameAndSurnameTypography>
      <AgeTypography variant='h5'>Age: 39</AgeTypography>
    </StyledUserDataWrapper>
  );
};
