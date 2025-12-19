import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeStore } from "../store/useThemeStore";
import { themes } from "../theme/themeService";

function AppThemeProvider({ children }) {
  const mode = useThemeStore((state) => state.mode);

  const theme = themes[mode];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
