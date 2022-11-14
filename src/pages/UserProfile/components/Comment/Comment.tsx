import { Dayjs } from 'dayjs';
import { useState } from 'react';
import ReviewsService from '~/api/services/ReviewsService';
import { Modal } from '~/components/Modal';
import { User } from '~/components/User';
import { UserFunctionType } from '~/enums/UserFunctionType';
import { useAuth } from '~/hooks/useAuth';
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
  userId: number;
  reviewId: number;
  userName: string;
  imageSource: string;
  reviewMean: number;
  isOwnComment: boolean;
  asWho: UserFunctionType;
  description: string;
  givenStars: number;
  date: Dayjs;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  refetchComments: () => void;
  setText: (value: string) => void;
  setShowInfoModal: (value: boolean) => void;
}

export const Comment = ({
  userId,
  reviewId,
  userName,
  imageSource,
  reviewMean,
  isOwnComment,
  asWho,
  description,
  givenStars,
  date,
  currentPage,
  setCurrentPage,
  refetchComments,
  setText,
  setShowInfoModal,
}: Props) => {
  const year = date.year();
  const monthName = transformMonthNumberToName(date.month());
  const { token } = useAuth();
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const { data, isError, refetch } = ReviewsService.useDeleteComment(token, reviewId);

  const handleDelete = () => {
    setShowQuestionModal(false);
    refetch().then(() => {
      if (currentPage === 1) {
        refetchComments();
      } else {
        setCurrentPage(1);
      }
    });
    if (isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setText((data as any).request.response.slice(1, -1) as string);
    } else {
      setText('Deleted comment successfully');
    }
    setShowInfoModal(true);
  };

  return (
    <>
      <CommentWrapper>
        <UpperWrapper>
          <User
            userId={userId}
            name={userName}
            imageSource={imageSource}
            reviewMean={reviewMean}
          />
          {isOwnComment && (
            <>
              <MediumTrashIcon
                fontSize='large'
                onClick={() => setShowQuestionModal(true)}
              />
              <SmallTrashIcon
                fontSize='medium'
                onClick={() => setShowQuestionModal(true)}
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
      {showQuestionModal && (
        <Modal
          open={showQuestionModal}
          title='Delete comment'
          text='Are you sure you want to delete this comment?'
          handleOpen={() => setShowQuestionModal(true)}
          handleClose={() => setShowQuestionModal(false)}
          primaryButtonText='Yes'
          primaryButtonAction={handleDelete}
          showButtonForOpeningModal={false}
          secondaryButtonText='No'
          secondaryButtonAction={() => setShowQuestionModal(false)}
        />
      )}
    </>
  );
};
