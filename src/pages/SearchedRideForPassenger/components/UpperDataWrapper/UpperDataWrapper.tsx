import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
import { useState } from 'react';
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
}

export const UpperDataWrapper = ({
  availableSeats,
  isLoading,
  date,
  isPrivate,
  showButton,
}: Props) => {
  const { authenticated } = useAuth();
  const [seatsToBook, setSeatsToBook] = useState<string>('');
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  if (isLoading || !date || isPrivate === undefined || !availableSeats) {
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
      <Wrapper>
        <DataWrapper>
          <Date variant='h3'>
            {transformedDay}.{transformedMonth}.{year}
          </Date>
          <RideType variant='h3'>{isPrivate ? 'Private ride' : 'Company ride'}</RideType>
        </DataWrapper>
        {showButton && authenticated && (
          <ButtonWrapper>
            <SelectSeats
              seatsToBook={seatsToBook}
              isLoading={isLoading}
              availableSeats={availableSeats}
              setSeatsToBook={setSeatsToBook}
            />
            <PrimaryButton
              label='Book ride'
              onClick={() => console.log('tu będzie bookowanie przejazdu')}
              desktopSize={Sizes.Medium}
              mobileSize={Sizes.Small}
            />
          </ButtonWrapper>
        )}
      </Wrapper>
    );
  }
};
