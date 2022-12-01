import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ridesClient } from '~/api/clients/ridesClient';
import UsersService from '~/api/services/UsersService';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { SelectSeats } from '../SelectSeats';
import { Wrapper, Date, DataWrapper, RideType, ButtonWrapper } from './UpperDataWrapper.style';
interface Props {
  userId: number | undefined;
  availableSeats: number | undefined;
  isLoading: boolean;
  date: string | undefined;
  isPrivate: boolean | undefined;
  showButton: boolean;
  rideId: number | undefined;
}

export const UpperDataWrapper = ({
  userId,
  availableSeats,
  isLoading,
  date,
  isPrivate,
  showButton,
  rideId,
}: Props) => {
  const navigate = useNavigate();
  const { authenticated, token } = useAuth();
  const { data: userData } = UsersService.useGetMyId(token ? token : '');
  const [seatsToBook, setSeatsToBook] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [isOwnRide, setIsOwnRide] = useState<boolean>(false);

  useEffect(() => {
    if (userData && userId) {
      if (userData.user_id === userId) {
        setIsOwnRide(true);
      }
    }
  }, [userData, userId]);

  const bookRide = async () => {
    setOpenModal(false);

    await ridesClient
      .post<unknown>(
        'requests/',
        { seats: Number(seatsToBook), ride: rideId },
        {
          headers: { Authorization: 'Bearer ' + token },
        },
      )
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setShowInfoModal(true);
        setText(data as string);
      })
      .catch((error) => {
        setShowInfoModal(true);
        setText(error.request.response.slice(1, -1));
      });
  };

  if (
    isLoading ||
    !date ||
    isPrivate === undefined ||
    availableSeats === undefined ||
    rideId === undefined
  ) {
    return (
      <Wrapper>
        <Skeleton
          variant='rectangular'
          height={isSmallScreen ? 25 : 30}
        />
      </Wrapper>
    );
  } else {
    const transformedDay = transformToDoubleDigit(dayjs(date).date());
    const transformedMonth = transformToDoubleDigit(dayjs(date).month(), true);
    const year = dayjs(date).year();

    return (
      <>
        <Wrapper>
          <DataWrapper>
            <Date variant='h3'>
              {transformedDay}.{transformedMonth}.{year}
            </Date>
            <RideType variant='h3'>{isPrivate ? 'Private ride' : 'Company ride'}</RideType>
          </DataWrapper>
          {!isOwnRide && showButton && authenticated && availableSeats > 0 && (
            <ButtonWrapper>
              <SelectSeats
                seatsToBook={seatsToBook}
                isLoading={isLoading}
                availableSeats={availableSeats}
                setSeatsToBook={setSeatsToBook}
              />
              <PrimaryButton
                id='book-ride-button'
                label='Book ride'
                onClick={() => setOpenModal(true)}
                desktopSize={Sizes.Medium}
                mobileSize={Sizes.Small}
              />
            </ButtonWrapper>
          )}
        </Wrapper>
        {openModal && (
          <Modal
            open={openModal}
            title='Book a ride'
            text={`Are you sure you want to book '${seatsToBook}' seats?`}
            handleOpen={() => setOpenModal(true)}
            handleClose={() => setOpenModal(false)}
            primaryButtonText='Yes'
            primaryButtonAction={bookRide}
            showButtonForOpeningModal={false}
            secondaryButtonText='No'
            secondaryButtonAction={() => setOpenModal(false)}
          />
        )}
        {showInfoModal && (
          <Modal
            open={showInfoModal}
            title='Book ride'
            text={text}
            handleOpen={() => setShowInfoModal(true)}
            handleClose={() => navigate(Paths.Home)}
            primaryButtonText='Okay'
            primaryButtonAction={() => navigate(Paths.Home)}
            showButtonForOpeningModal={false}
          />
        )}
      </>
    );
  }
};
