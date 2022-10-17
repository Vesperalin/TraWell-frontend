import { useNavigate } from 'react-router';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { SocialMedia } from './components/SocialMedia';
import { UserData } from './components/UserData';
import { StyledProfileWrapper } from './MyProfile.style';

export const MyProfile = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(Paths.Home);
  };

  return (
    <StyledProfileWrapper>
      <UserData />
      <SocialMedia />
      <PrimaryButton
        label='Add review'
        onClick={onClickHandler}
        desktopSize={Sizes.Medium}
        mobileSize={Sizes.Small}
      />
    </StyledProfileWrapper>
  );
};
