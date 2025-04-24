import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${(props) => props.theme.primary};

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.theme.primary};
    background-color: ${(props) => props.theme.border};
  }
`;
