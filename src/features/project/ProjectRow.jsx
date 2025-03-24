import { useState } from "react";
import CreateProject from "./CreateProject";
import styled from "styled-components";
import { FiEdit, FiTrash } from "react-icons/fi";
import Modal from "../../ui/Modal";
import { formatDate } from "../../utils/helper";
import { useDeleteProject } from "../../mutationsAndFn/project/useDeleteProject";

const ProjectRow = ({ project }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { deleteProject, isDeleting } = useDeleteProject();

  const { id: projectId, created_at, title } = project;

  const handleShowForm = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Td>{formatDate(created_at)}</Td>
      <Td>{title.length > 50 ? title.slice(0, 50) + "..." : title}</Td>
      <TdActions>
        <button onClick={handleShowForm}>
        <FiEdit />
        </button>
        <button disabled={isDeleting} onClick={() => deleteProject(projectId)}>
          <FiTrash />
        </button>
      </TdActions>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateProject
            projectToEdit={project}
            onCloseModal={() => setIsOpenModal(false)}
          />
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
