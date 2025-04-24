import styled from "@emotion/styled";

export const FormContainer = styled.form`
  display: flex;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px ${(props) => props.theme.shadow};
  border-radius: 4px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 2px solid ${(props) => props.theme.border};
  border-right: none;
  border-radius: 4px 0 0 4px;
  background-color: ${(props) => props.theme.card};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }

  &::placeholder {
    color: ${(props) => props.theme.completed};
  }
`;

export const AddButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 1.2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
