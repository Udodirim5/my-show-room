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
import { useTheme } from "../contexts/ThemeContext";

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { isDarkMode, toggleTheme } = useTheme();

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
          <SidebarItemLink to="/admin/dashboard">
            <Icon isCollapsed={isCollapsed}>
              <FiHome />
            </Icon>
            {!isCollapsed && "Dashboard"}
          </SidebarItemLink>
          <SidebarItemLink to="/admin/posts">
            <Icon isCollapsed={isCollapsed}>
              <FiFileText />
            </Icon>
            {!isCollapsed && "Blog"}
          </SidebarItemLink>
          <SidebarItemLink to="/admin/project">
            <Icon isCollapsed={isCollapsed}>
              <FiFolder />
            </Icon>
            {!isCollapsed && "Projects"}
          </SidebarItemLink>
          <SidebarItemLink to="/admin/settings">
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
              <NavLink className="bottomNavIcon" to="/admin/dashboard">
                <FiHome />
              </NavLink>
            </li>
            <li>
              <NavLink className="bottomNavIcon" to="/admin/posts">
                <FiFileText />
              </NavLink>
            </li>
            <li>
              <NavLink className="bottomNavIcon" to="/admin/project">
                <FiFolder />
              </NavLink>
            </li>
            <li>
              <NavLink className="bottomNavIcon" to="/admin/settings">
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
const SidebarItemLink = styled(NavLink)`
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
  &.active {
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.text};
  }
`;

const Icon = styled.div`
margin-top: 3px;
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
    background: linear-gradient(135deg, #10041c, #2c1a4a);

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;

      li {
        .bottomNavIcon {
          text-decoration: none;
          color: #fff;
          font-size: 2rem;
          &.active {
            color: red;
          }
        }
      }
    }
  }
`;
