import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FiMail, FiRefreshCw } from "react-icons/fi";

const EmailVerification = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.email_confirmed_at) {
      navigate("/admin/dashboard");
    }
  }, [user, navigate]);

  return (
    <VerificationContainer>
      <Card>
        <MailIconContainer>
          <MailIcon />
        </MailIconContainer>
        
        <Title>Verify Your Email Address</Title>
        <Message>
          We've sent a verification link to <strong>{user?.email}</strong>. 
          Please click the link in that email to continue.
        </Message>
        
        <Divider />
        
        <HelpText>
          Didn't receive the email? Check your spam folder or
        </HelpText>
        <ResendButton>
          <FiRefreshCw /> Resend Verification Email
        </ResendButton>
      </Card>
    </VerificationContainer>
  );
};

export default EmailVerification;

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const VerificationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  width: 100%;
  max-width: 500px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const MailIconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: #e3f2fd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MailIcon = styled(FiMail)`
  font-size: 2.5rem;
  color: #1976d2;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Divider = styled.div`
  height: 1px;
  background: #e2e8f0;
  margin: 1.5rem 0;
`;

const HelpText = styled.p`
  color: #718096;
  font-size: 0.9375rem;
  margin-bottom: 0.5rem;
`;

const ResendButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: #3182ce;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;
  
  &:hover {
    background: #ebf8ff;
    animation: ${pulse} 1s infinite;
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: rotate(180deg);
  }
`;