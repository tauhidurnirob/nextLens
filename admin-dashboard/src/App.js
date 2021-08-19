import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";
import Layout from "./Components/Layout";
import Product from "./Components/Products/Product";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProductForm from "./Components/Products/ProductForm";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Dashboard">
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/product"
          element={
            <Layout title="Products">
              <Product />
            </Layout>
          }
        />

        <Route
          path="/product/add-product"
          element={
            <Layout title="Add Product">
              <ProductForm />
            </Layout>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
