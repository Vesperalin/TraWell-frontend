import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import { Dayjs } from 'dayjs';
import { TimeLocationOfRide } from '~/components/TimeLocationOfRide';
import { User } from '~/components/User';
import { Paths } from '~/enums/Paths';
import { RequestStatus } from '~/enums/RequestStatus';
import {
  Wrapper,
  FirstInnerWrapper,
  SecondInnerWrapper,
  StyledLink,
  MediumPrimaryButton,
  SmallPrimaryButton,
  StatusWrapper,
  StatusText,
} from './Request.style';

export interface Props {
  startDate: Dayjs;
  isCar: boolean;
  placeFrom: string;
  exactPlaceFrom?: string;
  lengthInMinutes: number;
  placeTo: string;
  exactPlaceTo?: string;
  detailsPath: Paths;
  userName: string;
  imageSource: string;
  reviewMean: number;
  requestStatus: RequestStatus;
}

export const Request = ({
  startDate,
  isCar,
  placeFrom,
  exactPlaceFrom,
  lengthInMinutes,
  placeTo,
  exactPlaceTo,
  detailsPath,
  userName,
  imageSource,
  reviewMean,
  requestStatus,
}: Props) => {
  const onCancel = () => {
    console.log('onCancel');
  };

  return (
    <Wrapper>
      <FirstInnerWrapper>
        <TimeLocationOfRide
          startDate={startDate}
          isCar={isCar}
          placeFrom={placeFrom}
          exactPlaceFrom={exactPlaceFrom}
          lengthInMinutes={lengthInMinutes}
          placeTo={placeTo}
          exactPlaceTo={exactPlaceTo}
        />
        <StyledLink
          style={{ textDecoration: 'none' }}
          to={detailsPath}
        >
          details
          <ArrowForwardIcon fontSize='small' />
        </StyledLink>
      </FirstInnerWrapper>
      <SecondInnerWrapper>
        <User
          isAvatarFirstDesktop={false}
          name={userName}
          imageSource={imageSource}
          reviewMean={reviewMean}
        />
        <StatusWrapper requestStatus={requestStatus}>
          <StatusText requestStatus={requestStatus}>
            Status: <span>{requestStatus}</span>
          </StatusText>
          {(requestStatus === RequestStatus.Accepted ||
            requestStatus === RequestStatus.Pending) && (
            <>
              <MediumPrimaryButton
                size='medium'
                onClick={onCancel}
              >
                cancel
              </MediumPrimaryButton>
              <SmallPrimaryButton
                size='small'
                onClick={onCancel}
              >
                cancel
              </SmallPrimaryButton>
            </>
          )}
        </StatusWrapper>
      </SecondInnerWrapper>
    </Wrapper>
  );
};
