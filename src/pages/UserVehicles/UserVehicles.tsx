import { AddVehicle } from './components/AddVehicle';
import { MyVehicles } from './components/MyVehicles';
import { Wrapper, LeftWrapper, RightWrapper, Label } from './UserVehicles.style';

export const UserVehicles = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Label variant='h3'>Add vehicle</Label>
        <AddVehicle />
      </LeftWrapper>
      <RightWrapper>
        <Label variant='h3'>My vehicles</Label>
        <MyVehicles />
      </RightWrapper>
    </Wrapper>
  );
};
