import ChangeThemeIcon from '@mui/icons-material/LightMode';
import { IconButton, Tooltip } from '@mui/material';
import { useContext, useRef } from 'react';

import { APP_THEME } from 'src/constants';
import { ThemeContext, THEMES } from 'src/theme/ThemeProvider';

function ThemeSwitcher() {
  const ref = useRef<any>(null);

  const setThemeName = useContext(ThemeContext);

  const handleClick = (): void => {
    const curThemeName = localStorage.getItem(APP_THEME);
    setThemeName(
      curThemeName === THEMES.PureLightTheme
        ? THEMES.FlashlyDarkTheme
        : THEMES.PureLightTheme
    );
  };

  return (
    <>
      <Tooltip arrow title="Change Theme">
        <IconButton color="primary" ref={ref} onClick={handleClick}>
          <ChangeThemeIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default ThemeSwitcher;
