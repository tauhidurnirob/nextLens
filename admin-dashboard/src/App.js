import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
