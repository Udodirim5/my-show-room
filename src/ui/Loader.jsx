import styled from "styled-components";
import Spinner from "./Spinnner";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;
