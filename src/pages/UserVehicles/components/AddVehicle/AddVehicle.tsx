import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import UsersService from '~/api/services/UsersService';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { TextInput } from '~/components/TextInput';
import { Sizes } from '~/enums/StyleSettings';
import { useAuth } from '~/hooks/useAuth';
import { Wrapper, Label, ButtonSection, ErrorMessage } from './AddVehicle.style';

export const AddVehicle = () => {
  const { token } = useAuth();
  const { refetch: refetchMyId, data: myIdData } = UsersService.useGetMyId(token ? token : '');
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { isError, refetch } = UsersService.useAddVehicle(
    token ? token : '',
    myIdData ? myIdData.user_id : -1,
    make,
    model,
    color,
  );

  const { refetch: refetchVehicles } = UsersService.useGetUserVehicles(
    token ? token : '',
    myIdData ? myIdData.user_id : -1,
  );

  useEffect(() => {
    if (token) {
      refetchMyId();
    }
  }, [refetchMyId, token]);

  const handleAdd = () => {
    if (make.trim() === '') {
      setError('You have to give: make');
    } else if (model.trim() === '') {
      setError('You have to give: model');
    } else if (color.trim() === '') {
      setError('You have to give: color');
    } else {
      refetch().then(() => {
        refetchVehicles();
        setOpenModal(true);
        setColor('');
        setModel('');
        setMake('');
      });
    }
  };

  return (
    <>
      <Wrapper>
        {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
        <Box>
          <Label variant='h4'>Make</Label>
          <TextInput
            id='make'
            label='Make'
            value={make}
            setValue={setMake}
          />
        </Box>
        <Box>
          <Label variant='h4'>Model</Label>
          <TextInput
            id='model'
            label='Model'
            value={model}
            setValue={setModel}
          />
        </Box>
        <Box>
          <Label variant='h4'>Color</Label>
          <TextInput
            id='color'
            label='Color'
            value={color}
            setValue={setColor}
          />
        </Box>
        <ButtonSection>
          <PrimaryButton
            id='add-review-button'
            label='Add'
            mobileSize={Sizes.Small}
            desktopSize={Sizes.Medium}
            onClick={handleAdd}
          />
        </ButtonSection>
      </Wrapper>
      <Modal
        open={openModal}
        title={isError ? 'Error occurred' : 'Vehicle added successfully'}
        text={
          isError
            ? 'Unexpected error occurred while adding the vehicle. Vehicle was not created!'
            : 'The vehicle was added successfully'
        }
        showButtonForOpeningModal={false}
        handleOpen={() => setOpenModal(true)}
        handleClose={() => setOpenModal(false)}
        primaryButtonText='Okay'
        primaryButtonAction={() => setOpenModal(false)}
      />
    </>
  );
};
