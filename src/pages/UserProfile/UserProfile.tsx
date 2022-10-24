import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { SocialMedia } from './components/SocialMedia';
import { UserData } from './components/UserData';
import { StyledProfileWrapper, StyledUserWrapper } from './UserProfile.style';

export const UserProfile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const onClickHandler = () => {
    navigate(Paths.Home);
  };

  console.log(userId);

  return (
    <StyledProfileWrapper>
      <StyledUserWrapper>
        <UserData />
        <SocialMedia />
      </StyledUserWrapper>
      <PrimaryButton
        label='Add review'
        onClick={onClickHandler}
        desktopSize={Sizes.Medium}
        mobileSize={Sizes.Small}
      />
    </StyledProfileWrapper>
  );
};
