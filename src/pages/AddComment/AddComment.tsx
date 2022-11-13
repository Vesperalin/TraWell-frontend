import dayjs from 'dayjs';
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
import { NotRatedRides } from '~/models/Comments/NotRatedRides';
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

const transformRides = (rides: NotRatedRides[]) => {
  return rides.map((ride) => {
    const date = dayjs(ride.start_date);
    return {
      key: ride.ride_id,
      // eslint-disable-next-line max-len
      value: `${ride.city_from} - ${
        ride.city_to
      }, ${date.hour()}:${date.minute()}, ${date.date()}.${date.month()}.${date.year()} - ${
        ride.was_driver ? 'driver' : 'passenger'
      }`,
    };
  });
};

export const AddComment = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [rating, setRating] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');
  const [userType, setUserType] = useState<string>('');
  const [descriptionChecked, setDescriptionChecked] = useState<boolean>(false);
  const [ride, setRide] = useState<number | null>(null);
  const { userId } = useParams();
  const { token } = useAuth();
  const { isLoading, data, refetch, isError } = UsersService.useGetUserData(
    token ? token : '',
    userId ? Number(userId) : -1,
  );

  const { refetch: refetchReview, isError: isErrorReview } = ReviewsService.useAddComment(
    token ? token : '',
    userId ? Number(userId) : -1,
    userType,
    ride ? ride : -1,
    rating ? rating : -1,
    description,
  );

  const {
    refetch: refetchNotRatedRides,
    isError: isErrorNotRatedRides,
    data: dataNotRatedRides,
  } = ReviewsService.useNotRatedRides(token ? token : '', userId ? Number(userId) : -1);

  useEffect(() => {
    if (dataNotRatedRides && ride !== null) {
      const tempRide = dataNotRatedRides.filter((ride) => ride.ride_id === ride.ride_id);
      if (tempRide.length > 0) {
        setUserType(tempRide[0].was_driver ? 'driver' : 'passenger');
      }
    }
  }, [dataNotRatedRides, ride]);

  useEffect(() => {
    if (token && userId) {
      refetch();
      refetchNotRatedRides();
    }
  }, [refetch, refetchNotRatedRides, token, userId]);

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
  } else if (isErrorNotRatedRides) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Could not find rides of user.',
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
                options={dataNotRatedRides ? transformRides(dataNotRatedRides) : []}
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
