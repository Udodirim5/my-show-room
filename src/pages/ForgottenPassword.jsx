import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you would typically call your API to send the reset email
    resetPassword(email);

    // Reset error and show success message
    setError("");
    setIsSubmitted(true);
  };

  return (
    <ResetPasswordContainer>
      <FormContainer>
        <h2>Reset Your Password</h2>
        <p>
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        {isSubmitted ? (
          <SuccessMessage>
            <p>
              If an account exists for {email}, you will receive an email with
              instructions to reset your password.
            </p>
            <p>
              Didn't receive the email? Check your spam folder or{" "}
              <ResendLink href="#" onClick={() => setIsSubmitted(false)}>
                try again
              </ResendLink>
              .
            </p>
          </SuccessMessage>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </FormGroup>
            <SubmitButton type="submit">Send Reset Link</SubmitButton>
          </form>
        )}

        <BackToLogin to="/sign/in">← Back to login</BackToLogin>
      </FormContainer>
    </ResetPasswordContainer>
  );
};

export default ForgottenPassword;

// Styled components
const ResetPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const FormContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: #333;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;

  label {
    font-size: 1rem;
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #4a90e2;
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
  }
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3a7bc8;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #f0f8ff;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: left;

  p {
    margin-bottom: 0.5rem;
    color: #333;
  }
`;

const ResendLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const BackToLogin = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
