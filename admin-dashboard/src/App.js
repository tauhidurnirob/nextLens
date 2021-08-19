import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes, Route } from "react-router-dom";

import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme";
import Layout from "./Components/Layout";
import Product from "./Components/Products/Product";
import Dashboard from "./Components/Dashboard/Dashboard";
import AddProductForm from "./Components/Products/AddProductForm";

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
              <AddProductForm />
            </Layout>
          }
        />
        <Route path="/category" element={<Layout title="Category"></Layout>} />
        <Route path="/orders" element={<Layout title="Orders"></Layout>} />
        <Route
          path="/customers"
          element={<Layout title="Customers"></Layout>}
        />
        <Route path="/coupons" element={<Layout title="Coupons"></Layout>} />
        <Route path="/settings" element={<Layout title="Settings"></Layout>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
