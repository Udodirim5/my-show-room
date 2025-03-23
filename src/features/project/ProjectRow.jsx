import { useState } from "react";
import CreateProject from "./CreateProject";
import styled from "styled-components";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "../../ui/Modal";

const ProjectRow = ({ project }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleShowForm = () => {
    setIsOpenModal(true);
  };
  
  return (
    <>
      <Td>{new Date(project.createdAt).toLocaleDateString()}</Td>
      <Td>
        {project.title.length > 50 ? project.title.slice(0, 50) + "..." : project.title}
      </Td>
      <TdActions>
        <FiEdit onClick={handleShowForm} />
        <FiTrash />
      </TdActions>
  
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateProject projectToEdit={project} onCloseModal={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </>
  );
};

export default ProjectRow;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.shadow};
`;

const TdActions = styled(Td)`
  display: flex;
  padding: 10px;
  gap: 10px;
  height: inherit;
  cursor: pointer;

  svg {
    font-size: 2rem;
    transition: color 0.2s ease-in-out;
  }

  svg:hover {
    color: ${({ theme }) => theme.text};
  }
`;
