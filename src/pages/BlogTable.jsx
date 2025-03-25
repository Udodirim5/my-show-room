import styled from "styled-components";
import BlogRow from "../features/post/BlogRow";
import AddPost from "../features/post/AddPost";
import { usePosts } from "../mutationsAndFn/post/usePost";
import Loader from "../ui/Loader";

const BlogTable = () => {
    const { isLoading, posts } = usePosts();
  
    if (isLoading) return <Loader />;
  
  return (
    <>
      <Header> All posts </Header>

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
            {posts?.map((post) => (
              <BlogRow key={post.id} post={post} />
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <AddNewPost>
        <AddPost />
      </AddNewPost>
    </>
  );
};

export default BlogTable;

const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  background: ${({ theme }) => theme.cardBackground};
  padding: 1rem;
  border-radius: 10px;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
`;

const Header = styled.h1`
  font-size: 2rem;
  margin: 1rem 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* Minimum width before scrolling kicks in */

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const AddNewPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;
