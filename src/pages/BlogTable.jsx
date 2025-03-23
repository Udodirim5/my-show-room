import styled from "styled-components";
import { FiEdit, FiTrash } from "react-icons/fi";
import { blogPosts } from "../../data/data";
import AddProject from "../features/project/AddProduct";
import BlogRow from "../features/post/BlogRow";

const BlogTable = () => {

  return (
    <>
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
                <BlogRow post={post}/>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <AddNewPost>
        <AddProject />
      </AddNewPost>

    </>
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


const AddNewPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
