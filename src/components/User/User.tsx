import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Avatar, ReviewWrapper, MediumIcon, SmallIcon, AvatarWrapper } from './User.style';

export interface Props {
  userId: number;
  isAvatarFirstDesktop?: boolean;
  isAvatarFirstMobile?: boolean;
  name: string;
  imageSource: string;
  reviewMean: number;
  className?: string;
}

export const User = ({
  userId,
  isAvatarFirstDesktop = true,
  isAvatarFirstMobile = true,
  name,
  imageSource,
  reviewMean,
  className,
}: Props) => {
  const navigate = useNavigate();

  const handleUserClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    navigate(`/profile/${userId}/1`);
  };

  return (
    <Wrapper
      isAvatarFirstDesktop={isAvatarFirstDesktop}
      isAvatarFirstMobile={isAvatarFirstMobile}
      onClick={handleUserClick}
      className={className}
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
