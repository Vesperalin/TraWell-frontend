import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { Wrapper } from './ChooseCreateRideType.style';

export const ChooseCreateRideType = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Typography variant='h3'>Choose a ride type you want to create</Typography>
      <PrimaryButton
        label='Singular'
        onClick={() => navigate(Paths.AddSingularRide)}
        desktopSize={Sizes.Medium}
        mobileSize={Sizes.Medium}
      />
      <PrimaryButton
        label='Recurrent'
        onClick={() => console.log('xd')}
        desktopSize={Sizes.Medium}
        mobileSize={Sizes.Medium}
      />
    </Wrapper>
  );
};
