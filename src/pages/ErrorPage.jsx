import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FiAlertTriangle, FiHome, FiRefreshCw } from "react-icons/fi";

const ErrorPage = ({ statusCode = 404, message = "Page not found" }) => {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <ErrorCard>
        <ErrorIcon>
          <FiAlertTriangle />
        </ErrorIcon>

        <ErrorCode>{statusCode}</ErrorCode>
        <ErrorMessage>{message}</ErrorMessage>

        <ErrorActions>
          <HomeButton onClick={() => navigate("/")}>
            <FiHome /> Return Home
          </HomeButton>
          <RetryButton onClick={() => window.location.reload()}>
            <FiRefreshCw /> Try Again
          </RetryButton>
        </ErrorActions>
      </ErrorCard>
    </ErrorContainer>
  );
};

export default ErrorPage;

// Animations
const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
  padding: 2rem;
`;

const ErrorCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  width: 100%;
  max-width: 500px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: #fff5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e53e3e;
  font-size: 2.5rem;
  animation: ${shake} 0.8s ease-in-out;
`;

const ErrorCode = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #e53e3e;
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const ErrorMessage = styled.p`
  color: #4a5568;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const ErrorActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
`;

const HomeButton = styled(BaseButton)`
  background: #e53e3e;
  color: white;
  border: none;

  &:hover {
    background: #c53030;
    animation: ${pulse} 1s infinite;
  }
`;

const RetryButton = styled(BaseButton)`
  background: white;
  color: #e53e3e;
  border: 1px solid #e53e3e;

  &:hover {
    background: #fff5f5;
  }
`;
