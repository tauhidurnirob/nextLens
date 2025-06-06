import Dashboard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Products/Product";
import AddProductForm from "./Components/Products/AddProductForm";
import Layout from "./Components/Layout";
import Order from "./Components/Orders/Orders";
import Customers from "./Components/Customers/Customers";

const routes = [
  {
    path: "/",
    component: (
      <Layout title="Dashboard">
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/product",
    component: (
      <Layout title="Product">
        <Product />
      </Layout>
    ),
  },
  {
    path: "/product/add-product",
    component: (
      <Layout title="Add Product">
        <AddProductForm />
      </Layout>
    ),
  },
  {
    path: "/orders",
    component: (
      <Layout title="Orders">
        <Order />
      </Layout>
    ),
  },
  {
    path: "/customers",
    component: (
      <Layout title="Customers">
        <Customers />
      </Layout>
    ),
  },
  // {
  //   path: "/coupons",
  //   component: <Layout title="Coupons"></Layout>,
  // },
  // { path: "/settings", component: <Layout title="Settings">Settings</Layout> },
];

export default routes;
