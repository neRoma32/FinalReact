import React, { useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeStore } from '../store/useThemeStore';

export const AppThemeProvider = ({ children }) => {

  const mode = useThemeStore((state) => state.mode);
  const theme = useMemo(() => createTheme({palette: {mode}}), [mode] );

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};