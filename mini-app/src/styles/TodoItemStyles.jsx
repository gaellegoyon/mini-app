import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 4px;
  box-shadow: 0 2px 5px ${(props) => props.theme.shadow};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${(props) => props.theme.shadow};
  }
`;

export const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
`;

export const Checkbox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid
    ${(props) => (props.completed ? props.theme.secondary : props.theme.border)};
  background-color: ${(props) =>
    props.completed ? props.theme.secondary : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: white;

  &:hover {
    border-color: ${(props) => props.theme.secondary};
    transform: scale(1.1);
  }
`;

export const Text = styled.span`
  font-size: 1rem;
  color: ${(props) =>
    props.completed ? props.theme.completed : props.theme.text};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  transition: all 0.2s ease;
  word-break: break-word;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.error};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;
