import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Sizes } from '~/enums/StyleSettings';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import { Wrapper, Date, DataWrapper, RideType, ButtonWrapper } from './UpperDataWrapper.style';

interface Props {
  isLoading: boolean;
  date: string | undefined;
  isPrivate: boolean | undefined;
}

export const UpperDataWrapper = ({ isLoading, date, isPrivate }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  if (isLoading || !date || !isPrivate) {
    return (
      <div>
        <Skeleton
          variant='rectangular'
          height={isSmallScreen ? 25 : 30}
        />
      </div>
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
        <ButtonWrapper>
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
