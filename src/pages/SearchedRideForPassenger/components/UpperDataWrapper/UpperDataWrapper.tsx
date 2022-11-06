import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ridesClient } from '~/api/clients/ridesClient';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { SelectSeats } from '../SelectSeats';
import { Wrapper, Date, DataWrapper, RideType, ButtonWrapper } from './UpperDataWrapper.style';
interface Props {
  availableSeats: number | undefined;
  isLoading: boolean;
  date: string | undefined;
  isPrivate: boolean | undefined;
  showButton: boolean;
  rideId: number | undefined;
}

export const UpperDataWrapper = ({
  availableSeats,
  isLoading,
  date,
  isPrivate,
  showButton,
  rideId,
}: Props) => {
  const { authenticated, token } = useAuth();
  const [seatsToBook, setSeatsToBook] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const bookRide = async () => {
    setOpenModal(false);

    await ridesClient
      .post<unknown>(
        `rides/${rideId}/send_request/`,
        { seats: Number(seatsToBook) },
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
        // refetchData();
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
          {showButton && authenticated && availableSeats > 0 && (
            <ButtonWrapper>
              <SelectSeats
                seatsToBook={seatsToBook}
                isLoading={isLoading}
                availableSeats={availableSeats}
                setSeatsToBook={setSeatsToBook}
              />
              <PrimaryButton
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
            handleClose={() => setShowInfoModal(false)}
            primaryButtonText='Okay'
            primaryButtonAction={() => setShowInfoModal(false)}
            showButtonForOpeningModal={false}
          />
        )}
      </>
    );
  }
};
