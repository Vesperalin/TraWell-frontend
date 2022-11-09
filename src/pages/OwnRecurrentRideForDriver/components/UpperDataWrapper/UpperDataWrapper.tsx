import CachedIcon from '@mui/icons-material/Cached';
import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Wrapper, RecurrentRide, DataWrapper, RideType } from './UpperDataWrapper.style';

interface Props {
  isLoading: boolean;
  isPrivate: boolean | undefined;
}

export const UpperDataWrapper = ({ isLoading, isPrivate }: Props) => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  if (isLoading || isPrivate === undefined) {
    return (
      <Wrapper>
        <Skeleton
          variant='rectangular'
          height={isSmallScreen ? 25 : 30}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <DataWrapper>
          <RecurrentRide variant='h3'>
            Recurrent ride <CachedIcon />
          </RecurrentRide>
          <RideType variant='h3'>{isPrivate ? 'Private ride' : 'Company ride'}</RideType>
        </DataWrapper>
      </Wrapper>
    );
  }
};
