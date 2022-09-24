import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Wrapper, Avatar, ReviewWrapper, MediumIcon, SmallIcon, AvatarWrapper } from './User.style';

export interface Props {
  isAvatarFirstDesktop?: boolean;
  isAvatarFirstMobile?: boolean;
  name: string;
  imageSource: string;
  reviewMean: number;
}

export const User = ({
  isAvatarFirstDesktop = true,
  isAvatarFirstMobile = true,
  name,
  imageSource,
  reviewMean,
}: Props) => {
  return (
    <Wrapper
      isAvatarFirstDesktop={isAvatarFirstDesktop}
      isAvatarFirstMobile={isAvatarFirstMobile}
      onClick={() => console.log('tu bedzie przeniesienie do strony o uytkowniku')}
    >
      <AvatarWrapper>
        <Avatar
          src={imageSource}
          alt='user avatar'
        />
      </AvatarWrapper>
      <Box>
        <Typography variant='h5'>{name}</Typography>
        <ReviewWrapper
          isAvatarFirstDesktop={isAvatarFirstDesktop}
          isAvatarFirstMobile={isAvatarFirstMobile}
        >
          <Typography variant='h4'>{reviewMean}</Typography>
          <MediumIcon fontSize='medium' />
          <SmallIcon fontSize='small' />
        </ReviewWrapper>
      </Box>
    </Wrapper>
  );
};
