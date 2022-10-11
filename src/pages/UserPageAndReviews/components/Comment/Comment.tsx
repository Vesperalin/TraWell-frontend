import { Dayjs } from 'dayjs';
import { User } from '~/components/User';
import { UserFunctionType } from '~/enums/UserFunctionType';
import { transformMonthNumberToName } from '~/utils/TransformMonthNumberToName';
import {
  CommentWrapper,
  UpperWrapper,
  SmallTrashIcon,
  MediumTrashIcon,
  AsWhoTypography,
  Description,
  SmallGoldenStar,
  MediumGoldenStar,
  SmallGrayStar,
  MediumGrayStar,
  Rating,
  RatingTypography,
  Date,
  LowerWrapper,
} from './Comment.style';

interface Props {
  userName: string;
  imageSource: string;
  reviewMean: number;
  isOwnComment: boolean;
  asWho: UserFunctionType;
  description: string;
  givenStars: number;
  date: Dayjs;
}

export const Comment = ({
  userName,
  imageSource,
  reviewMean,
  isOwnComment,
  asWho,
  description,
  givenStars,
  date,
}: Props) => {
  const year = date.year();
  const monthName = transformMonthNumberToName(date.month());

  return (
    <CommentWrapper>
      <UpperWrapper>
        <User
          name={userName}
          imageSource={imageSource}
          reviewMean={reviewMean}
        />
        {isOwnComment && (
          <>
            <MediumTrashIcon
              fontSize='large'
              onClick={() => console.log('usun')}
            />
            <SmallTrashIcon
              fontSize='medium'
              onClick={() => console.log('usun')}
            />
          </>
        )}
      </UpperWrapper>
      <AsWhoTypography variant='h5'>
        As: <span>{asWho}</span>
      </AsWhoTypography>
      <Description variant='h6'>{description}</Description>
      <LowerWrapper>
        <Rating>
          <RatingTypography variant='h5'>Rating: </RatingTypography>
          {[...new Array(givenStars).keys()].map((rating) => (
            <div key={rating}>
              <MediumGoldenStar fontSize='medium' />
              <SmallGoldenStar fontSize='small' />
            </div>
          ))}
          {[...new Array(5 - givenStars).keys()].map((rating) => (
            <div key={rating}>
              <MediumGrayStar fontSize='medium' />
              <SmallGrayStar fontSize='small' />
            </div>
          ))}
        </Rating>
        <Date variant='caption'>
          <span>
            {monthName}, {year}
          </span>
        </Date>
      </LowerWrapper>
    </CommentWrapper>
  );
};
