import { SelectChangeEvent } from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
import { useState } from 'react';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Sizes } from '~/enums/StyleSettings';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { SelectSeats } from '../SelectSeats';
import { Wrapper, Date, DataWrapper, RideType, ButtonWrapper } from './UpperDataWrapper.style';

interface Props {
  availableSeats: number | undefined;
  isLoading: boolean;
  date: string | undefined;
  isPrivate: boolean | undefined;
}

export const UpperDataWrapper = ({ availableSeats, isLoading, date, isPrivate }: Props) => {
  const [seatsToBook, setSeatsToBook] = useState<string | null>(null);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  if (isLoading || !date || !isPrivate || !availableSeats) {
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

    const handleChange = (event: SelectChangeEvent) => {
      setSeatsToBook(event.target.value);
    };

    return (
      <Wrapper>
        <DataWrapper>
          <Date variant='h3'>
            {transformedDay}.{transformedMonth}.{year}
          </Date>
          <RideType variant='h3'>{isPrivate ? 'Private ride' : 'Company ride'}</RideType>
        </DataWrapper>
        <ButtonWrapper>
          <SelectSeats
            isLoading={isLoading}
            availableSeats={availableSeats}
            handleChange={handleChange}
          />
          <PrimaryButton
            label='Book ride'
            onClick={() => console.log('tu będzie bookowanie przejazdu')}
            desktopSize={Sizes.Medium}
            mobileSize={Sizes.Small}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
};
