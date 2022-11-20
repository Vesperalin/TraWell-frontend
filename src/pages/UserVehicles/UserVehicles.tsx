import { useEffect } from 'react';
import UsersService from '~/api/services/UsersService';
import { Loader } from '~/components/Loader';
import { useAuth } from '~/hooks/useAuth';
import { AddVehicle } from './components/AddVehicle';
import { MyVehicles } from './components/MyVehicles';
import { Wrapper, LeftWrapper, RightWrapper, Label } from './UserVehicles.style';

export const UserVehicles = () => {
  const { token } = useAuth();
  const { refetch: refetchMyId, data: myIdData } = UsersService.useGetMyId(token ? token : '');

  useEffect(() => {
    if (token) {
      refetchMyId();
    }
  }, [refetchMyId, token]);

  if (!token || !myIdData) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <LeftWrapper>
        <Label variant='h3'>Add vehicle</Label>
        <AddVehicle
          token={token}
          userId={myIdData.user_id}
        />
      </LeftWrapper>
      <RightWrapper>
        <Label variant='h3'>My vehicles</Label>
        <MyVehicles
          token={token}
          userId={myIdData.user_id}
        />
      </RightWrapper>
    </Wrapper>
  );
};
