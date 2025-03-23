import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateProject from "./CreateProject";

const AddProject = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal( true)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal( false)}>
          <CreateProject projectToEdit={{}} onCloseModal={() => setIsOpenModal( false)} />
        </Modal>
      )}
    </div>
  );
};

export default AddProject;
