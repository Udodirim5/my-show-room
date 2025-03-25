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
    <TableRow>
      <Td>
        <MobileLabel>Created At:</MobileLabel>
        {formatDate(created_at)}
      </Td>
      <Td>
        <MobileLabel>Title:</MobileLabel>
        {title.length > 50 ? title.slice(0, 50) + "..." : title}
      </Td>
      <TdActions>
        <MobileLabel>Actions:</MobileLabel>
        <ActionIcons>
          <IconBtn disabled={isDeleting}>
            <FiEdit disabled onClick={handleShowForm} />
          </IconBtn>
          <IconBtn
            disabled={isDeleting}
            onClick={() => deleteProject(projectId)}
          >
            <FiTrash />
          </IconBtn>
        </ActionIcons>
      </TdActions>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateProject
            projectToEdit={project}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </TableRow>
  );
};

export default ProjectRow;

const TableRow = styled.tr`
  @media (max-width: 768px) {
    display: block;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.cardBackground};
  }
`;

const Td = styled.td`
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  position: relative;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 0.5rem 0.25rem 0.5rem 40%;
    text-align: right;
    border-bottom: none;
  }

  @media (max-width: 480px) {
    padding-left: 50%;
    font-size: 0.8125rem;
  }
`;

const TdActions = styled(Td)`
  display: table-cell;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    padding-left: 40%;
    text-align: right;
    border-top: 1px dashed ${({ theme }) => theme.border};
    margin-top: 0.5rem;
    padding-top: 0.75rem;
  }
`;

const MobileLabel = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  cursor: pointer;

  svg {
    font-size: 1.25rem;
    transition: color 0.2s ease-in-out;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  svg:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    gap: 0.5rem;
  }
`;

const IconBtn = styled.button`
  all: unset;
  background: none;
`;
