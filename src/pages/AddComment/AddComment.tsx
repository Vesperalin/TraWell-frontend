import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import UsersService from '~/api/services/UsersService';
import { Description } from '~/components/Description';
import { Loader } from '~/components/Loader';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { Wrapper, Title, UpperWrapper, LeftUpperWrapper, ButtonWrapper } from './AddComment.style';
import { Dropdown } from './components/Dropdown';
import { Rating } from './components/Rating';
import { User } from './components/User';

const DUMMY_OPTIONS = [
  { key: 2366, value: 'Katowice - Warszawa  18:15, 24.09.2022 - passenger' },
  { key: 2367, value: 'Katowice - Warszawa  18:15, 30.09.2022 - passenger' },
];

export const AddComment = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');
  const [descriptionChecked, setDescriptionChecked] = useState<boolean>(false);
  const [ride, setRide] = useState<number>(2366);
  const { userId } = useParams();
  const { token } = useAuth();
  const { isLoading, data, refetch, isError } = UsersService.useGetUserData(
    token ? token : '',
    userId ? Number(userId) : -1,
  );

  useEffect(() => {
    if (token && userId) {
      refetch();
    }
  }, [refetch, token, userId]);

  // TODO: add loader

  if (isError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'The drive is archival or do not exist.',
        }}
      />
    );
  } else if (isLoading) {
    return <Loader />;
  } else if (data) {
    return (
      <Wrapper>
        <Title variant='h3'>Add a review</Title>
        <UpperWrapper>
          <LeftUpperWrapper>
            <Dropdown
              options={DUMMY_OPTIONS}
              label='Ride'
              onChange={setRide}
              value={ride}
            />
            <Rating
              rating={rating}
              setRating={setRating}
            />
          </LeftUpperWrapper>
          <User
            dateOfBirth={data.date_of_birth}
            name={data.first_name}
            imageSource={data.avatar}
            reviewMean={Number(data.avg_rate)}
          />
        </UpperWrapper>
        <Description
          value={description}
          setValue={setDescription}
          label='Description (optional)'
          checked={descriptionChecked}
          setChecked={setDescriptionChecked}
        />
        <ButtonWrapper>
          <PrimaryButton
            label='Add comment'
            onClick={() => {
              //
            }}
            desktopSize={Sizes.Medium}
            mobileSize={Sizes.Small}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  } else {
    return <></>;
  }
};
