import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";

import routes from "./routes";

function App() {
  const routeComponents = routes.map(({ path, component }, index) => (
    <Route key={index} path={path} element={component} />
  ));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Routes>{routeComponents}</Routes>
    </ThemeProvider>
  );
}

export default App;
