import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <StyledHeader>
      <Nav>
        <Logo to="/">
          <img src="images/my_pic.jpg" alt="" />
          <div className="info">
            <span>Udodirim</span>
          </div>
        </Logo>

        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <TopNavLists open={menuOpen}>
          <TopNavLis>
            <NavLink className="nav-links" to="about">
              About Me
            </NavLink>
          </TopNavLis>
          <TopNavLis>
            <NavLink className="nav-links" to="contact-me">
              Contact
            </NavLink>
          </TopNavLis>
          <TopNavLis>
            <NavLink className="nav-links" to="projects">
              Projects
            </NavLink>
          </TopNavLis>
          <TopNavLis>
            <NavLink className="nav-links" to="blog">
              Blog
            </NavLink>
          </TopNavLis>

          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FiSun /> : <FiMoon />} Theme
          </ThemeToggle>
        </TopNavLists>
      </Nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.text};
  z-index: 999;
`;

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 99px;
  padding: 5px;

  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.text};
  }
  .info {
    display: flex;
    span {
      font-size: 1.8rem;
    }
  }
`;

// Navigation menu container
const TopNavLists = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 96px;
    right: 0;
    background: ${({ theme }) => theme.background};
    width: 100%;
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 10px;
    box-shadow: 0px 4px 6px ${({ theme }) => theme.paleShadow};
    padding: 1rem;
  }
`;

const TopNavLis = styled.li`
  .nav-links {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    border-radius: 9px;
    transition: all 0.3s ease;
    border: 1px solid #333;
    padding: 0.5rem 1rem;
    display: block;
    text-align: center;

    &.active {
      background: #000;
      color: #fff;
    }
    &:hover {
      background: #10041c;
      color: #fff;
    }
  }
`;

// Hamburger Button
const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 768px) {
  }
`;
