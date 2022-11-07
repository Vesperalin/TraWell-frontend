import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { Wrapper, StyledText } from './ChooseCreateRideType.style';

export const ChooseCreateRideType = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <StyledText variant='h3'>Choose a ride type you want to create</StyledText>
      <PrimaryButton
        label='Singular'
        onClick={() => navigate(Paths.AddSingularRide)}
        desktopSize={Sizes.Medium}
        mobileSize={Sizes.Medium}
      />
      <PrimaryButton
        label='Recurrent'
        onClick={() => navigate(Paths.AddRecurrentRide)}
        desktopSize={Sizes.Medium}
        mobileSize={Sizes.Medium}
      />
    </Wrapper>
  );
};
