import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';
import { APP_THEME } from 'src/constants';

export enum THEMES {
  PureLightTheme = 'PureLightTheme',
  FlashlyDarkTheme = 'FlashlyDarkTheme'
}

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  const curThemeName = localStorage.getItem(APP_THEME) || THEMES.PureLightTheme;
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: THEMES): void => {
    localStorage.setItem(APP_THEME, themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
