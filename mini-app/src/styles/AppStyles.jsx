import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={(theme) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Poppins", "Roboto", sans-serif;
        background-color: ${theme.body};
        color: ${theme.text};
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 20px;
      }

      button {
        cursor: pointer;
      }
    `}
  />
);

export const Container = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.card};
  border-radius: 12px;
  box-shadow: 0 8px 24px ${props => props.theme.shadow};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem;
  }
`;