import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import {
  FiHome,
  FiFileText,
  FiFolder,
  FiSettings,
  FiSun,
  FiMoon,
} from "react-icons/fi";

const AdminLayout = ({ isDarkMode, setIsDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Header>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </ThemeToggle>

        <Link to="/" className="logo">Udodirim</Link>
      </Header>
      <Container>
        <Sidebar isCollapsed={isCollapsed}>
          <SidebarItem onClick={() => setIsCollapsed(!isCollapsed)}>
            <Icon isCollapsed={isCollapsed}>{isCollapsed ? "☰" : "✖"}</Icon>
          </SidebarItem>
          <SidebarItemLink to="/dashboard">
            <Icon isCollapsed={isCollapsed}>
              <FiHome />
            </Icon>
            {!isCollapsed && "Dashboard"}
          </SidebarItemLink>
          <SidebarItemLink to="/dashboard/admin/posts">
            <Icon isCollapsed={isCollapsed}>
              <FiFileText />
            </Icon>
            {!isCollapsed && "Blog"}
          </SidebarItemLink>
          <SidebarItemLink to="/dashboard/admin/project">
            <Icon isCollapsed={isCollapsed}>
              <FiFolder />
            </Icon>
            {!isCollapsed && "Projects"}
          </SidebarItemLink>
          <SidebarItemLink to="/dashboard/admin/settings">
            <Icon isCollapsed={isCollapsed}>
              <FiSettings />
            </Icon>
            {!isCollapsed && "Settings"}
          </SidebarItemLink>
        </Sidebar>

        <MainContent>
          {/* Pass activeTab as a prop */}
          <Content>
            <Outlet />
          </Content>
        </MainContent>

        <BottomBar>
          <ul>
            <li>
              <NavLink className="bottomNavIcon" to="/dashboard">
                <FiHome />
              </NavLink>
            </li>
            <li>
              <NavLink className="bottomNavIcon" to="/dashboard/admin/posts">
                <FiFileText />
              </NavLink>
            </li>
            <li>
              <NavLink className="bottomNavIcon" to="/dashboard/admin/project">
                <FiFolder />
              </NavLink>
            </li>
            <li>
              <NavLink className="bottomNavIcon" to="/dashboard/admin/settings">
                <FiSettings />
              </NavLink>
            </li>
          </ul>
        </BottomBar>
      </Container>
    </>
  );
};

export default AdminLayout;

const Container = styled.div`
  display: flex;
  height: 100dvh;
  background-color: ${({ theme }) => theme.background};

  @media screen and (max-width: 768px) {
    padding-bottom: 4rem;
  }
`;

const Sidebar = styled.div`
  width: ${({ isCollapsed }) => (isCollapsed ? "80px" : "250px")};
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 2px 0 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.background : "transparent"};
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;
const SidebarItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.background : "transparent"};
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
`;

const Icon = styled.div`
  margin-right: ${({ isCollapsed }) => (isCollapsed ? "0" : "10px")};
  font-size: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid #333;
  background:   ${({ theme }) => theme.background};
  box-shadow: 2px 0 5px ${({ theme }) => theme.shadow};
  
  .logo{
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

`;

const Title = styled.h1`
  font-size: 24px;
`;

const ThemeToggle = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 30px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const BottomBar = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.text};

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li {
        .bottomNavIcon {
          text-decoration: none;
          color: ${({ theme }) => theme.background};
          font-size: 2rem;
          &.active {
            color: red;
          }
        }
      }
    }
  }
`;
