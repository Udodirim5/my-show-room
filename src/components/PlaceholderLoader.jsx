import styled, { keyframes } from "styled-components";

const PlaceholderLoader = () => {
  return (
    <PlaceholderContainer>
      <Skeleton className="skeleton-img" />
      <Skeleton className="skeleton-text" />
      <Skeleton className="skeleton-text small" />
      <Skeleton className="skeleton-buttons" />
    </PlaceholderContainer>
  );
};

export default PlaceholderLoader;

// Pulsing animation
const pulse = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// Placeholder container
const PlaceholderContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground || "#fff"};
  padding: 1rem;
  border-radius: 9px;
  box-shadow: 0 0 20px ${({ theme }) => theme.liteShadow || "#ddd"};
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

// Skeleton elements
const Skeleton = styled.div`
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: ${pulse} 1.5s infinite ease-in-out;
  border-radius: 8px;
  
  &.skeleton-img {
    width: 100%;
    height: 180px;
  }
  
  &.skeleton-text {
    width: 80%;
    height: 20px;
  }

  &.small {
    width: 50%;
    height: 16px;
  }

  &.skeleton-buttons {
    width: 100%;
    height: 36px;
    margin-top: 12px;
  }
`;
