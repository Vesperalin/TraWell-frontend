import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import UsersService from '~/api/services/UsersService';
import { Loader } from '~/components/Loader';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { TextInput } from '~/components/TextInput';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { transformToDoubleDigit } from '~/utils/TransformToDoubleDigit';
import {
  Wrapper,
  Title,
  AvatarWrapper,
  Avatar,
  NameWrapper,
  Name,
  MediumIcon,
  SmallIcon,
  ReviewWrapper,
  Avg,
  UpperSection,
  Label,
  Value,
  LowerSection,
  ValueWrapper,
  DataWrapper,
  ButtonWrapper,
  EditButtonWrapper,
} from './AccountSettings.style';

export const AccountSettings = () => {
  const navigate = useNavigate();
  const [editFacebook, setEditFacebook] = useState<boolean>(false);
  const [facebook, setFacebook] = useState<string>('');
  const [editInstagram, setEditInstagram] = useState<boolean>(false);
  const [instagram, setInstagram] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { token } = useAuth();
  const {
    data: userIdData,
    refetch: refetchUserIdData,
    isLoading: isUserIdLoading,
    isError: isUserIdError,
  } = UsersService.useGetMyId(token ? token : '');
  const {
    data: userData,
    refetch: refetchUserData,
    isLoading: isUserLoading,
    isError: isUserError,
  } = UsersService.useGetUserData(token ? token : '', userIdData ? userIdData.user_id : -1);
  const { refetch: refetchUserDataPatch, isError: isUserErrorPatch } =
    UsersService.useUpdateUserData(
      token ? token : '',
      userIdData ? userIdData.user_id : -1,
      editFacebook ? facebook : undefined,
      editInstagram ? instagram : undefined,
    );

  useEffect(() => {
    if (token) {
      refetchUserIdData();
    }
  }, [refetchUserIdData, token]);

  useEffect(() => {
    if (token && userIdData) {
      refetchUserData();
    }
  }, [refetchUserData, token, userIdData]);

  useEffect(() => {
    if (userData) {
      setFacebook(userData.facebook);
      setInstagram(userData.instagram);
    }
  }, [userData]);

  if (isUserIdError || isUserError) {
    return (
      <Navigate
        to={Paths.Error}
        replace={true}
        state={{
          text: 'Unexpected error appeared during retrieving data. Try again',
        }}
      />
    );
  } else if (isUserIdLoading || isUserLoading) {
    return <Loader />;
  } else if (userData) {
    const day = transformToDoubleDigit(dayjs(userData.date_of_birth).date());
    const month = transformToDoubleDigit(dayjs(userData.date_of_birth).month(), true);
    const year = dayjs(userData.date_of_birth).year();

    const handleSave = () => {
      refetchUserDataPatch().then(() => {
        setOpenModal(true);
      });
    };

    return (
      <>
        <Wrapper>
          <Title variant='h3'>Account</Title>
          <AvatarWrapper>
            <Avatar
              src={userData.avatar}
              alt='user avatar'
            />
            <NameWrapper>
              <Name>
                {userData.first_name} {userData.last_name}
              </Name>
              <ReviewWrapper>
                <Avg variant='h4'>{userData.avg_rate}</Avg>
                <MediumIcon fontSize='medium' />
                <SmallIcon fontSize='small' />
              </ReviewWrapper>
            </NameWrapper>
          </AvatarWrapper>
          <DataWrapper>
            <UpperSection>
              <Box>
                <Label variant='h5'>Email:</Label>
                <Value variant='h5'>{userData.email}</Value>
              </Box>
              <Box>
                <Label variant='h5'>Date of birth:</Label>
                <Value variant='h5'>
                  {day}.{month}.{year}
                </Value>
              </Box>
              <Box>
                <Label variant='h5'>User type:</Label>
                <Value variant='h5'>
                  {userData.user_type.charAt(0).toUpperCase()}
                  {userData.user_type.slice(1)}
                </Value>
              </Box>
            </UpperSection>
            <LowerSection>
              <Box>
                <Label variant='h5'>Facebook URL:</Label>
                <ValueWrapper>
                  {editFacebook ? (
                    <TextInput
                      id='edit-facebook-input'
                      label='Facebook URL'
                      value={facebook}
                      setValue={setFacebook}
                    />
                  ) : (
                    <Value variant='h5'>{userData.facebook}</Value>
                  )}
                  <EditButtonWrapper>
                    <PrimaryButton
                      id='edit-facebook-url'
                      label='Edit'
                      desktopSize={Sizes.Small}
                      mobileSize={Sizes.Small}
                      onClick={() => setEditFacebook((prev) => !prev)}
                    />
                  </EditButtonWrapper>
                </ValueWrapper>
              </Box>
              <Box>
                <Label variant='h5'>Instagram URL:</Label>
                <ValueWrapper>
                  {editInstagram ? (
                    <TextInput
                      id='edit-instagram-input'
                      label='Instagram URL'
                      value={instagram}
                      setValue={setInstagram}
                    />
                  ) : (
                    <Value variant='h5'>{userData.instagram}</Value>
                  )}
                  <EditButtonWrapper>
                    <PrimaryButton
                      id='edit-instagram-url'
                      label='Edit'
                      desktopSize={Sizes.Small}
                      mobileSize={Sizes.Small}
                      onClick={() => setEditInstagram((prev) => !prev)}
                    />
                  </EditButtonWrapper>
                </ValueWrapper>
              </Box>
            </LowerSection>
          </DataWrapper>
          <ButtonWrapper>
            <PrimaryButton
              id='save-button'
              label='Save'
              desktopSize={Sizes.Medium}
              mobileSize={Sizes.Small}
              onClick={handleSave}
            />
          </ButtonWrapper>
        </Wrapper>
        <Modal
          open={openModal}
          title={isUserErrorPatch ? 'Error occurred' : 'User data changed successfully'}
          text={
            isUserErrorPatch
              ? 'Unexpected error occurred while updating user data. Data was not changed!'
              : 'The user data was changed successfully'
          }
          showButtonForOpeningModal={false}
          handleOpen={() => setOpenModal(true)}
          handleClose={() => navigate(Paths.Home)}
          primaryButtonText='Okay'
          primaryButtonAction={() => navigate(Paths.Home)}
        />
      </>
    );
  } else {
    return <></>;
  }
};
