import { FaMoon, FaSun } from 'react-icons/fa';
import { HeaderContainer, Title, ThemeToggle } from '../styles/HeaderStyles';

const Header = ({ toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <Title>TaskMaster</Title>
      <ThemeToggle onClick={toggleTheme} data-testid="theme-toggle">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;