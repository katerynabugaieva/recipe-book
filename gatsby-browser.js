import React from 'react';
import ThemeProvider from "./src/providers/ThemeProvider";
// import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
