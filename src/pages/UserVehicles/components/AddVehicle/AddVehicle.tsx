import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '~/api/services/UsersService';
import { Modal } from '~/components/Modal';
import { PrimaryButton } from '~/components/PrimaryButton';
import { TextInput } from '~/components/TextInput';
import { Paths } from '~/enums/Paths';
import { Sizes } from '~/enums/StyleSettings';
import { Wrapper, Section, Label, ButtonSection, ErrorMessage } from './AddVehicle.style';

interface Props {
  token: string;
  userId: number;
}

export const AddVehicle = ({ token, userId }: Props) => {
  const navigate = useNavigate();
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { isError, refetch } = UserService.useAddVehicle(token, userId, make, model, color);

  const handleAdd = () => {
    if (make.trim() === '') {
      setError('You have to give: make');
    } else if (model.trim() === '') {
      setError('You have to give: model');
    } else if (color.trim() === '') {
      setError('You have to give: color');
    } else {
      refetch().then(() => {
        setOpenModal(true);
      });
    }
  };

  return (
    <>
      <Wrapper>
        {error !== '' && <ErrorMessage variant='h4'>{error}</ErrorMessage>}
        <Section>
          <Label variant='h4'>Make</Label>
          <TextInput
            id='make'
            label='Make'
            value={make}
            setValue={setMake}
          />
        </Section>
        <Section>
          <Label variant='h4'>Model</Label>
          <TextInput
            id='model'
            label='Model'
            value={model}
            setValue={setModel}
          />
        </Section>
        <Section>
          <Label variant='h4'>Color</Label>
          <TextInput
            id='color'
            label='Color'
            value={color}
            setValue={setColor}
          />
        </Section>
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
        handleClose={() => navigate(Paths.Home)}
        primaryButtonText='Okay'
        primaryButtonAction={() => navigate(Paths.Home)}
      />
    </>
  );
};
