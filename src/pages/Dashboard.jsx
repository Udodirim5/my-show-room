import styled from "styled-components";
import { usePosts } from "../mutationsAndFn/post/usePost";
import { useProjects } from "../mutationsAndFn/project/useProject";


const Dashboard = () => {
  const { isLoading: postsLoading, posts } = usePosts();
  const { isLoading, projects } = useProjects()
  
  return (
    <Container>
      <Header> Dashboard </Header>
      <MainContent>
        <Card>
          <h2>Total Blog Posts</h2>
          <p>{postsLoading ? "Loading..." : posts.length}</p>
        </Card>
        <Card>
          <h2>Total Projects</h2>
          <p>{isLoading ? "Loading..." : projects.length}</p>
        </Card>
        <Card>
          <h2>Recent Updates</h2>
          <p>Last update: 2 days ago</p>
        </Card>
      </MainContent>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 2rem;
  margin: 1rem 1.5rem;
`

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 0 4px 6px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;
