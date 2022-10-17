import { SocialMedia } from './components/SocialMedia';
import { UserData } from './components/UserData';
import { StyledProfileWrapper } from './MyProfile.style';

export const MyProfile = () => {
  return (
    <StyledProfileWrapper>
      <UserData />
      <SocialMedia />
    </StyledProfileWrapper>
  );
};
