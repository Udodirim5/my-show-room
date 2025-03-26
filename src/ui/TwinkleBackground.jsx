import styled, { keyframes, css } from "styled-components";

// Star animations
const twinkleSlow = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.8; }
`;

const twinkleFast = keyframes`
  0%, 100% { opacity: 0.1; }
  50% { opacity: 1; }
`;

const shootingStar = keyframes`
  0% { 
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateX(100vw) translateY(100vh);
    opacity: 0;
  }
`;

// Base styles with theme awareness
const CosmicBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  transition: background 0.5s ease;
  
  ${({ theme }) => theme.mode === 'dark' && css`
    background: radial-gradient(
      ellipse at bottom,
      #1B2735 0%,
      #090A0F 100%
    );
  `}
`;

// Star components
const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${({ speed }) => speed === 'fast' ? twinkleFast : twinkleSlow} 
    ${({ speed }) => speed === 'fast' ? '2s' : '4s'} 
    infinite 
    ${({ delay }) => delay || '0s'};
  
  ${({ size }) => size === 'small' && css`
    width: 1px;
    height: 1px;
    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.3);
  `}
  
  ${({ size }) => size === 'medium' && css`
    width: 2px;
    height: 2px;
    box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.5);
  `}
  
  ${({ size }) => size === 'large' && css`
    width: 3px;
    height: 3px;
    box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.7);
  `}
  
  ${({ color }) => color === 'blue' && css`
    background: #7FB2FF;
    box-shadow: 0 0 10px 1px #7FB2FF;
  `}
  
  ${({ color }) => color === 'gold' && css`
    background: #FFD700;
    box-shadow: 0 0 10px 1px #FFD700;
  `}
`;

const ShootingStar = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
  transform: rotate(-45deg);
  animation: ${shootingStar} 5s linear infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
`;

// Main component
const CosmicStarfield = ({ stars = 150 }) => {
  const generateStars = () => {
    return Array.from({ length: stars }).map((_, i) => {
      const size = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
      const speed = Math.random() > 0.7 ? 'fast' : 'slow';
      const color = Math.random() > 0.9 ? (Math.random() > 0.5 ? 'blue' : 'gold') : 'white';
      
      return (
        <Star
          key={i}
          size={size}
          speed={speed}
          color={color}
          delay={`${Math.random() * 5}s`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      );
    });
  };

  return (
    <CosmicBackground>
      {generateStars()}
      <ShootingStar delay="0s" style={{ top: '10%', left: '-100px' }} />
      <ShootingStar delay="7s" style={{ top: '25%', left: '-100px' }} />
      <ShootingStar delay="15s" style={{ top: '50%', left: '-100px' }} />
    </CosmicBackground>
  );
};

export default CosmicStarfield;