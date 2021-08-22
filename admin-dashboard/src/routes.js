import Dashboard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Products/Product";
import AddProductForm from "./Components/Products/AddProductForm";
import Category from "./Components/Category/Category";
import Layout from "./Components/Layout";
import AddCategoryForm from "./Components/Category/AddCategoryForm";
import Order from "./Components/Orders/Orders";

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
    path: "/category",
    component: (
      <Layout title="Category">
        <Category />
      </Layout>
    ),
  },
  {
    path: "/category/add-category",
    component: (
      <Layout title="Add Category">
        <AddCategoryForm />
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
    component: <Layout title="Customers">Customers</Layout>,
  },
  // { path: "/coupons", component: <Layout title="Coupons">Coupons</Layout> },
  // { path: "/settings", component: <Layout title="Settings">Settings</Layout> },
];

export default routes;
