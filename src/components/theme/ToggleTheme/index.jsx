import React, { useContext } from "react"

import { ThemeContext } from "../../../providers/ThemeProvider"
import { ToggleButton } from "./styles"
import moonIcon from "../../../assets/icons/moon.svg"
import sunIcon from "../../../assets/icons/sun.svg"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <ToggleButton type="button" onClick={toggleTheme}>
      <img src={theme === "light" ? moonIcon : sunIcon} alt={theme} />
    </ToggleButton>
  )
}

export default ToggleTheme
