import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { useAuth } from "../contexts/AuthContext";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { signUp, login } = useAuth(); // Use auth context methods

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signUp(email, password);
      }
      setError("Successfully authenticated");
      navigate("/verify-email");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <AuthContainer>
      <AuthCard>
        <Logo to="/">
          Dev<span>Memoirs</span>
        </Logo>

        <AuthTabs>
          <TabButton active={isLogin} onClick={() => setIsLogin(true)}>
            Sign In
          </TabButton>
          <TabButton active={!isLogin} onClick={() => setIsLogin(false)}>
            Sign Up
          </TabButton>
        </AuthTabs>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              autoComplete="email"
              autoFocus
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              minLength="6"
            />
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? <Spinner /> : isLogin ? "Sign In" : "Create Account"}
          </SubmitButton>
        </Form>

        <SocialAuth>
          <p>Or continue with</p>
          <SocialButtons>
            <SocialButton
              type="button"
              onClick={() =>
                supabase.auth.signInWithOAuth({ provider: "google" })
              }
            >
              <GoogleIcon />
              Google
            </SocialButton>
            <SocialButton
              type="button"
              onClick={() =>
                supabase.auth.signInWithOAuth({ provider: "github" })
              }
            >
              <GithubIcon />
              GitHub
            </SocialButton>
          </SocialButtons>
        </SocialAuth>
      </AuthCard>
    </AuthContainer>
  );
};

// Styled Components
const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

const AuthCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  padding: 2.5rem;
  text-align: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: #4f46e5;

  span {
    color: #111827;
  }
`;

const AuthTabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const TabButton = styled.button`
  all: unset;
  margin-top: 2rem;
  flex: 1;
  padding: 0.75rem;
  font-weight: 600;
  color: ${({ active }) => (active ? "#4f46e5" : "#6b7280")};
  border-bottom: 2px solid
    ${({ active }) => (active ? "#4f46e5" : "transparent")};
  transition: all 0.2s;

  &:hover {
    color: #4f46e5;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.9375rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: -0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #4338ca;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const SocialAuth = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  p {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;

const SocialButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const SocialButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #f9fafb;
    border-color: #d1d5db;
  }
`;

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3636H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.2045Z"
      fill="#4285F4"
    />
    <path
      d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z"
      fill="#34A853"
    />
    <path
      d="M3.96409 10.71C3.78409 10.17 3.68182 9.5931 3.68182 9C3.68182 8.4069 3.78409 7.83 3.96409 7.29V4.9582H0.957273C0.347727 6.1731 0 7.5477 0 9C0 10.4523 0.347727 11.8269 0.957273 13.0418L3.96409 10.71Z"
      fill="#FBBC05"
    />
    <path
      d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
      fill="#EA4335"
    />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
      fill="#000000"
    />
  </svg>
);

export default AuthForm;
