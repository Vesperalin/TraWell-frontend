import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useParams, Navigate } from 'react-router-dom';
import UsersService from '~/api/services/UsersService';
import { AuthorizedElement } from '~/components/AuthorizedElement';
import { Loader } from '~/components/Loader';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { calculateAge } from '~/utils/CalculateAge';
import { SocialMedia } from './components/SocialMedia';
import { UserData } from './components/UserData';
import { StyledProfileWrapper, StyledUserWrapper } from './UserProfile.style';

export const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const { isLoading, data, refetch, isError } = UsersService.useGetUserData(
    token ? token : '',
    userId ? Number(userId) : -1,
  );

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token, refetch]);

  const onClickHandler = () => {
    navigate(`/add-comment/${userId}`);
  };

  if ((isLoading || !data) && !isError) {
    return <Loader />;
  } else if (isError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Error occurred. Cannot find the user',
        }}
      />
    );
  } else {
    const age = calculateAge(new Date(data.date_of_birth));

    return (
      <StyledProfileWrapper>
        <StyledUserWrapper>
          <UserData
            src={data.avatar}
            altText={data.first_name + ' ' + data.last_name}
            review={data.avg_rate}
            age={age}
          />
          <SocialMedia
            facebookLink={data.facebook}
            instagramLink={data.instagram}
          />
        </StyledUserWrapper>
        <AuthorizedElement>
          <PrimaryButton
            label='Add review'
            onClick={onClickHandler}
            desktopSize={Sizes.Medium}
            mobileSize={Sizes.Small}
          />
        </AuthorizedElement>
      </StyledProfileWrapper>
    );
  }
};
