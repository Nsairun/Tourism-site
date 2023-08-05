import React from 'react';

const themeContext = React.createContext();

export const ThemeProvider = themeContext.Provider;
export const ThemeConsumer = themeContext.Consumer;

export const themeObject = {
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
  dark: {
    color: 'white',
    backgroundColor: 'black',
  },
};

export const useTheme = () => {
  return React.useContext(themeContext);
};
