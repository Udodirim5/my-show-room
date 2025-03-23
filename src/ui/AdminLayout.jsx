import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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

        <Header>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </Header>
      </Sidebar>

      <MainContent>
        {/* Pass activeTab as a prop */}
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </Container>
  );
};

export default AdminLayout;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

const Sidebar = styled.div`
  width: ${({ isCollapsed }) => (isCollapsed ? "80px" : "250px")};
  background-color: ${({ theme }) => theme.cardBackground};
  box-shadow: 2px 0 5px ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  padding: 20px;
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
  position: fixed;
  bottom: 0;
  left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;
