'use client';
import { Travel } from '@/db-models';
import DropMenuButton from './DropMenuButton';
import Modal from './Modal';
import { useState } from 'react';
import AccommodationForm from './forms/AccommodationForm';
import TransferForm from './forms/TransferForm';
import ActivityForm from './forms/ActivityForm';
import Button from './Button';
import Box from './Box';
import { saveItem } from '@/app/actions/newTravel';

type AddNewModalProps = {
  travel: Travel;
};

type ActivityType = 'activity' | 'transfer' | 'accommodation';

const AddNewModal = ({ travel }: AddNewModalProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [type, setType] = useState<ActivityType | undefined>();

  return (
    <div className="add-new-wrapper">
      <DropMenuButton
        fromRight
        id="user-menu"
        label="Add new"
        // label={
        //   <div className="user-button">
        //     Add new
        //   </div>
        // }
      >
        <button
          onClick={() => {
            setShowModal(true);
            setType('accommodation');
          }}
        >
          Accommodation
        </button>
        <button
          onClick={() => {
            setShowModal(true);
            setType('transfer');
          }}
        >
          Transfer
        </button>
        <button
          onClick={() => {
            setShowModal(true);
            setType('activity');
          }}
        >
          Activity
        </button>
      </DropMenuButton>
      <Modal
        id="addnew"
        blur
        visible={showModal}
        onClose={() => setShowModal(false)}
      >
        <h3>Add new {type}</h3>
        <form action={saveItem}>
          <input type="hidden" name="itemType" value={type} />
          <input type="hidden" name="travelId" value={travel.id} />
          {type === 'accommodation' && <AccommodationForm />}
          {type === 'transfer' && <TransferForm />}
          {type === 'activity' && <ActivityForm />}

          <Box alignItems="flex-end">
            <Button>Add {type}</Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewModal;
