import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import AppThemeProvider from "./providers/AppThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <AppRoutes />
      </AppThemeProvider>
    </BrowserRouter>
  );
}

export default App;
