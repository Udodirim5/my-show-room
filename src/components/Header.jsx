import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the menu

const StyledHeader = styled.header`
  border-bottom: 2px solid #10041c78;
`;

const Nav = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.a`
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
    border: 2px solid #10041c;
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
    top: 70px;
    right: 0;
    background: #fff;
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
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

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <Nav>
        <Logo href="/">
          <img src="images/my_pic.jpg" alt="" />
          <div className="info">
            <span>Udodirim</span>
          </div>
        </Logo>

        <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />} 
        </MenuButton>

        <TopNavLists open={menuOpen}>
          <TopNavLis><NavLink className="nav-links" to="about">About Me</NavLink></TopNavLis>
          <TopNavLis><NavLink className="nav-links" to="contact-me">Contact</NavLink></TopNavLis>
          <TopNavLis><NavLink className="nav-links" to="projects">Projects</NavLink></TopNavLis>
          <TopNavLis><NavLink className="nav-links" to="blog">Blog</NavLink></TopNavLis>
        </TopNavLists>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
