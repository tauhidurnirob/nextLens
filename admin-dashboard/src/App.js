import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";
import Layout from "./Components/Layout";

import routes from "./routes";

function App() {
  const routeComponents = routes.map(({ path, title, component }, index) => (
    <Route
      key={index}
      path={path}
      element={<Layout title={title}>{component}</Layout>}
    />
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
