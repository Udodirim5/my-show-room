import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  max-width: 120rem;
  margin: 0 auto;
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    padding: .7rem;
  }

  @media (max-width: 480px) {
    padding: .4rem;
  }
`;

const AppLayout = ({isDarkMode, setIsDarkMode}) => {
  return (
    <Layout>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
