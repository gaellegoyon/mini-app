import styled from "@emotion/styled";

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
`;

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${(props) => props.theme.completed};
  font-style: italic;
  background-color: ${(props) => props.theme.card};
  border-radius: 4px;
  margin-top: 1rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  @media (max-width: 500px) {
    gap: 0.5rem;
  }
`;

export const FilterButton = styled.button`
  background: ${(props) =>
    props.active ? props.theme.primary : "transparent"};
  color: ${(props) => (props.active ? "white" : props.theme.text)};
  border: 1px solid
    ${(props) => (props.active ? props.theme.primary : props.theme.border)};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? props.theme.primary : props.theme.border};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
