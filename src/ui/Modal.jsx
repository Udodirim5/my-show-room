import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";


const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  padding: 3.2rem 4rem;
  transition: all 0.5s;
  border-radius: 2rem;
  `;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  `;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  /* display: none; */
  
  &:hover {
    background: ${({ theme }) => theme.background};
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${({ theme }) => theme.iconColor || theme.text}; /* Use iconColor from the theme, default to text color */
  }
`;


const Modal = ({ children, onClose }) => {
  return (
    <Overlay>
      <StyledModal>
      <Button onClick={onClose}>
        <HiXMark />
      </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>
  );
};

export default Modal;
