import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 14rem 1fr 1.2fr;
  gap: 1.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #cccccc60;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: #af2f2f;
`;

const FormRow = ({ label, htmlFor, errors, children }) => {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      {children}
      {errors && <Error>{errors}</Error>}
    </StyledFormRow>
  );
};

export default FormRow;
