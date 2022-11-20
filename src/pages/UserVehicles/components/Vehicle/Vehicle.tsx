import { useState } from 'react';
import UsersService from '~/api/services/UsersService';
import { Modal } from '~/components/Modal';
import { VehicleWrapper, VehicleDescription, TrashIcon } from './Vehicle.style';

interface Props {
  id: number;
  token: string;
  make: string;
  model: string;
  color: string;
  refetchVehicles: () => void;
}

export const Vehicle = ({ id, token, make, model, color, refetchVehicles }: Props) => {
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const { isError, refetch } = UsersService.useDeleteVehicle(token, id);

  const handleDelete = () => {
    refetch().then(() => {
      refetchVehicles();
    });

    if (isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setText('Vehicle was not deleted due to an error');
    } else {
      setText('Vehicle was deleted successfully');
    }
    setShowInfoModal(true);
  };

  return (
    <>
      <VehicleWrapper key={id}>
        <VehicleDescription variant='h5'>
          {make} {model} {color}
        </VehicleDescription>
        <TrashIcon onClick={() => setShowQuestionModal(true)} />
      </VehicleWrapper>
      {showQuestionModal && (
        <Modal
          open={showQuestionModal}
          title='Delete vehicle'
          text='Are you sure you want to delete this vehicle?'
          handleOpen={() => setShowQuestionModal(true)}
          handleClose={() => setShowQuestionModal(false)}
          primaryButtonText='Yes'
          primaryButtonAction={handleDelete}
          showButtonForOpeningModal={false}
          secondaryButtonText='No'
          secondaryButtonAction={() => setShowQuestionModal(false)}
        />
      )}
      {showInfoModal && (
        <Modal
          open={showInfoModal}
          title='Delete vehicle'
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
};
