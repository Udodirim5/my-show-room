import styled from "styled-components";
import { FiEdit, FiTrash } from "react-icons/fi";
import { blogPosts } from "../../data/data";
import Button from "../ui/Button";

const BlogTable = () => {
  const onEdit = (id) => {
    console.log("Edit post with id", id);
  }

  const onDelete = (id) => {
    console.log("Delete post with id ", id);
  }
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Created At</Th>
            <Th>Title</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((post) => (
            <tr key={post.id}>
              <Td>{new Date(post.createdAt).toLocaleDateString()}</Td>
              <Td>{post.title.length > 50 ? post.title.slice(0, 50) + "..." : post.title}</Td>
              <TdActions>
                <FiEdit onClick={() => onEdit(post.id)} />
                <FiTrash onClick={() => onDelete(post.id)} />
              </TdActions>
            </tr>
          ))}
        </tbody>
      </Table>

      <AddNewPost>
        <Button fontSize='1.5rem' >Add New Post</Button>
      </AddNewPost>

    </TableContainer>
  );
};

export default BlogTable;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  border-radius: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

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

const AddNewPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`