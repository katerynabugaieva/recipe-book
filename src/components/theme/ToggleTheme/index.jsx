import React, { useContext } from 'react';
import sunIcon from '../../../assets/icons/sun.svg';
import moonIcon from '../../../assets/icons/moon.svg';
import { Wrapper } from './styles';
import { ThemeContext } from '../../../providers/ThemeProvider';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(
    "toggletheme", theme
  )
  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
