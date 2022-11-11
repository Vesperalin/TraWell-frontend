import { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import ReviewsService from '~/api/services/ReviewsService';
import UsersService from '~/api/services/UsersService';
import { Description } from '~/components/Description';
import { Loader } from '~/components/Loader';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import {
  Wrapper,
  Title,
  UpperWrapper,
  LeftUpperWrapper,
  ButtonWrapper,
  ErrorMessage,
} from './AddComment.style';
import { Dropdown } from './components/Dropdown';
import { Rating } from './components/Rating';
import { User } from './components/User';

const DUMMY_OPTIONS = [
  { key: 2366, value: 'Katowice - Warszawa  18:15, 24.09.2022 - driver' },
  { key: 2367, value: 'Katowice - Warszawa  18:15, 30.09.2022 - driver' },
];

export const AddComment = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
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

  // TODO - zmienić user type potem i rideId
  const { refetch: refetchReview, isError: isErrorReview } = ReviewsService.useComment(
    token ? token : '',
    userId ? Number(userId) : -1,
    'driver',
    1,
    4,
    description,
  );

  useEffect(() => {
    if (token && userId) {
      refetch();
    }
  }, [refetch, token, userId]);

  const submitHandler = () => {
    if (rating === null || rating === 0) {
      setError('You have to choose rating');
    } else if (ride === null) {
      setError('You have to choose ride');
    } else {
      refetchReview().then(() => {
        setOpenModal(true);
      });
    }
  };

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
      <>
        <Wrapper>
          <Title variant='h3'>Add a review</Title>
          {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
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
              label='Add'
              onClick={submitHandler}
              desktopSize={Sizes.Medium}
              mobileSize={Sizes.Small}
            />
          </ButtonWrapper>
        </Wrapper>
        <Modal
          open={openModal}
          title={isErrorReview ? 'Error occurred' : 'Review added successfully'}
          text={
            isErrorReview
              ? 'Unexpected error occurred while adding the review. Review was not created!'
              : 'The review was added successfully. Thank you for your opinion!'
          }
          showButtonForOpeningModal={false}
          handleOpen={() => setOpenModal(true)}
          handleClose={() => navigate(Paths.Home)}
          primaryButtonText='Okay'
          primaryButtonAction={() => navigate(Paths.Home)}
        />
      </>
    );
  } else {
    return <></>;
  }
};
