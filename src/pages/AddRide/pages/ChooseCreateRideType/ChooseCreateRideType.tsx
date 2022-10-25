import Typography from '@mui/material/Typography';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Sizes } from '~/enums/StyleSettings';
import { Wrapper } from './ChooseCreateRideType.style';

export const ChooseCreateRideType = () => {
  return (
    <Wrapper>
      <Typography variant='h3'>Choose a ride type you want to create</Typography>
      <PrimaryButton
        label='Singular'
        onClick={() => console.log('xd')}
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
