import Pagination from '@mui/material/Pagination';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dayjs from 'dayjs';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams, Navigate } from 'react-router-dom';
import ReviewsService from '~/api/services/ReviewsService';
import UsersService from '~/api/services/UsersService';
import { AuthorizedElement } from '~/components/AuthorizedElement';
import { DesktopFilter, MobileFilter } from '~/components/Filter';
import { TypeOfFilter } from '~/components/Filter/enums/TypeOfFilter';
import {
  FilterType,
  RatingMeanFilterType,
  RadioButtonsFilterType,
} from '~/components/Filter/models/FilterType';
import { Loader } from '~/components/Loader';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { Sort } from '~/components/Sort';
import { SortElement } from '~/components/Sort/models/SortElement';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { UserFunctionType } from '~/enums/UserFunctionType';
import { useAuth } from '~/hooks/useAuth';
import { calculateAge } from '~/utils/CalculateAge/CalculateAge';
import { Comment } from './components/Comment';
import { NoCommentsFound } from './components/NoCommentsFound';
import { SocialMedia } from './components/SocialMedia';
import { UserData } from './components/UserData';
import {
  Content,
  StyledProfileWrapper,
  StyledUserWrapper,
  Wrapper,
  SortAndFiltersComponent,
  NoCommentsWrapper,
  Comments,
  PaginationWrapper,
} from './UserProfile.style';

const sortElements: SortElement[] = [
  { label: 'Opinions: my first', value: 'my_first' },
  { label: 'Rate: highest first', value: 'desc' },
  { label: 'Rate: lowest first', value: 'asc' },
];

export const UserProfile = () => {
  const { page, userId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [filteredUserRole, setFilteredUserRole] = useState<string>('all');
  const [filterReviewFrom, setFilterReviewFrom] = useState<string>('');
  const [filterReviewTo, setFilterReviewTo] = useState<string>('');
  const [sortKey, setSortKey] = useState<string>('my_first');
  const [currentPage, setCurrentPage] = useState<number>(page ? Number(page) : 1);
  const [text, setText] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const { isLoading, data, refetch, isError } = UsersService.useGetUserData(
    token ? token : '',
    userId ? Number(userId) : -1,
  );

  const {
    isLoading: areCommentsLoading,
    data: comments,
    isError: isCommentsError,
    refetch: refetchComments,
  } = ReviewsService.useComments(
    currentPage,
    token,
    Number(userId),
    filteredUserRole,
    sortKey,
    filterReviewFrom,
    filterReviewTo,
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isTheSame = token && data && (jwt_decode(token) as any).email === data.email;

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token, refetch]);

  useEffect(() => {
    setTimeout(() => {
      if (token && userId) {
        refetchComments();
      }
    }, 100);
    // eslint-disable-next-line max-len, react-hooks/exhaustive-deps
  }, [filteredUserRole, filterReviewFrom, filterReviewTo, sortKey, currentPage, refetchComments]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(1);
    setTimeout(() => {
      navigate(`/profile/${userId}/1`);
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredUserRole, filterReviewFrom, filterReviewTo]);

  const onClickHandler = () => {
    navigate(`/add-comment/${userId}`);
  };

  const filters: FilterType[] = [
    {
      type: TypeOfFilter.RatingMeanFilterType,
      from: filterReviewFrom,
      setFrom: setFilterReviewFrom,
      to: filterReviewTo,
      setTo: setFilterReviewTo,
    } as RatingMeanFilterType,
    {
      label: 'Role:',
      type: TypeOfFilter.RadioButtonsFilter,
      options: [
        { value: 'all', label: 'All' },
        { value: 'driver', label: 'Driver' },
        { value: 'passenger', label: 'Passenger' },
      ],
      defaultValue: 'all',
      setValue: setFilteredUserRole,
    } as RadioButtonsFilterType,
  ];

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(value);
    navigate(`/profile/${userId}/${value}`);
  };

  if (
    ((isLoading || !data) && !isError) ||
    ((areCommentsLoading || !comments) && !isCommentsError)
  ) {
    return <Loader />;
  } else if (isError || isCommentsError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Error occurred. Cannot find the user',
        }}
      />
    );
  } else {
    const age = calculateAge(new Date(data.date_of_birth));
    const pagesAmount = Math.ceil(
      (comments ? comments.count : 0) / (data ? comments.page_size : 1),
    );

    return (
      <>
        <Wrapper>
          <StyledProfileWrapper>
            <StyledUserWrapper>
              <UserData
                src={data.avatar}
                altText={data.first_name + ' ' + data.last_name}
                review={data.avg_rate}
                age={age}
                name={data.first_name + ' ' + data.last_name}
              />
              <SocialMedia
                facebookLink={data.facebook}
                instagramLink={data.instagram}
              />
            </StyledUserWrapper>
            {!isTheSame && (
              <AuthorizedElement>
                <PrimaryButton
                  id='add-review'
                  label='Add review'
                  onClick={onClickHandler}
                  desktopSize={Sizes.Medium}
                  mobileSize={Sizes.Small}
                />
              </AuthorizedElement>
            )}
          </StyledProfileWrapper>
          <SortAndFiltersComponent>
            <MobileFilter filters={filters} />
            <Sort
              sortElements={sortElements}
              setSortElementKey={setSortKey}
              sortElementKey={sortKey}
            />
          </SortAndFiltersComponent>
          <Content>
            <DesktopFilter filters={filters} />
            <Comments>
              <>
                {areCommentsLoading && <Loader />}
                {!areCommentsLoading &&
                  comments &&
                  comments.results.length > 0 &&
                  comments.results.map((comment) => {
                    return (
                      <Comment
                        key={comment.review_id}
                        reviewId={comment.review_id}
                        userId={comment.reviewer.user_id}
                        userName={comment.reviewer.first_name}
                        imageSource={comment.reviewer.avatar}
                        reviewMean={Number(comment.reviewer.avg_rate)}
                        isOwnComment={
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          comment.reviewer.email === (jwt_decode(token ? token : '') as any).email
                        }
                        asWho={
                          comment.was_rated_driver
                            ? UserFunctionType.Driver
                            : UserFunctionType.Passenger
                        }
                        description={comment.description}
                        givenStars={comment.stars}
                        date={dayjs(comment.created_on)}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        refetchComments={refetchComments}
                        setText={setText}
                        setShowInfoModal={setShowInfoModal}
                      />
                    );
                  })}
              </>
              {!areCommentsLoading && comments && comments.results.length == 0 && (
                <NoCommentsWrapper>
                  <NoCommentsFound />
                </NoCommentsWrapper>
              )}
            </Comments>
          </Content>
          {!(!areCommentsLoading && comments && comments.results.length === 0) && (
            <PaginationWrapper>
              <Pagination
                count={pagesAmount}
                variant='outlined'
                shape='rounded'
                page={currentPage}
                onChange={handleChange}
                size={isSmallScreen ? 'small' : 'medium'}
              />
            </PaginationWrapper>
          )}
        </Wrapper>
        {showInfoModal && (
          <Modal
            open={showInfoModal}
            title='Delete comment'
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
