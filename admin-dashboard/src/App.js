import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";
import Layout from "./Components/Layout";
import Product from "./Components/Product";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
