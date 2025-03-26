import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Header = ({ title, children }) => {
  const [filter, setFilter] = useState("latest");

  return (
    <CosmicHeader>
      <Title>{title}</Title>
      <CosmicFilter>
        <FilterSelect
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {children}
        </FilterSelect>
        <Starfield>
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                size: `${Math.random() * 3 + 1}px`,
              }}
            />
          ))}
        </Starfield>
        <FilterIcon>☄️</FilterIcon>
      </CosmicFilter>
    </CosmicHeader>
  );
};

export default Header;

// Animations
const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

// Styled components
const CosmicHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: relative;
  border-bottom: 1px solid rgba(138, 43, 226, 0.2);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  background: linear-gradient(45deg, #8a2be2, #00bfff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CosmicFilter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(20, 20, 40, 0.8);
  border-radius: 50px;
  padding: 0.2rem 0.2rem 0.2rem 1rem;
  border: 1px solid #4b0082;
  box-shadow: 0 0 15px rgba(75, 0, 130, 0.5);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 25px rgba(138, 43, 226, 0.7);
    transform: translateY(-2px);
  }
`;

const FilterSelect = styled.select`
  padding: 0.6rem 1rem 0.6rem 0.5rem;
  border: none;
  background: transparent;
  color: #e6e6fa;
  font-weight: 500;
  font-size: 0.9rem;
  appearance: none;
  cursor: pointer;
  position: relative;
  z-index: 2;
  outline: none;
  width: 180px;

  option {
    background: #1a1a2e;
    color: #e6e6fa;
    padding: 0.5rem;
  }
`;

const FilterIcon = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
  background: linear-gradient(45deg, #8a2be2, #4b0082);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  animation: ${float} 3s ease-in-out infinite;
`;

const Starfield = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  width: ${(props) => props.size || "2px"};
  height: ${(props) => props.size || "2px"};
  animation: ${twinkle} ${(props) => Math.random() * 3 + 2}s infinite;
`;
