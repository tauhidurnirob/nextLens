import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";
import Layout from "./Components/Layout";

import routes from "./routes";

function App() {
  const routeComponents = routes.map((item, index) => (
    <Route
      key={index}
      path={item.path}
      element={<Layout title={item.title}>{item.component}</Layout>}
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
