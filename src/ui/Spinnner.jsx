import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default Spinner;