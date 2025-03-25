import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <Overlay>
      <div>{children}</div>
    </Overlay>
  );
};

export default Modal;

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
