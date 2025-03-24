import { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import styled from "styled-components";
import CreateProject from "../project/CreateProject";
import Modal from "../../ui/Modal";

const BlogRow = ({ post }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleShowForm = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <Td>{new Date(post.createdAt).toLocaleDateString()}</Td>
      <Td>
        {post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}
      </Td>
      <TdActions>
        <FiEdit onClick={handleShowForm} />
        <FiTrash />
      </TdActions>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateProject
            projectToEdit={post}
            onCloseModal={() => setIsOpenModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default BlogRow;

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
