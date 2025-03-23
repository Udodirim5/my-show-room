import styled from "styled-components";
import { blogPosts, projects } from "../../data/data";

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 4rem 2rem;
`;

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

const Dashboard = () => {
  return (
    <Container>
      <MainContent>
        <Card>
          <h2>Total Blog Posts</h2>
          <p>{blogPosts.length}</p>
        </Card>
        <Card>
          <h2>Total Projects</h2>
          <p>{projects.length}</p>
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
