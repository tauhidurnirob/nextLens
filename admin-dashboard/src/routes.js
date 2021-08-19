import Dashboard from "./Components/Dashboard/Dashboard";
import Product from "./Components/Products/Product";
import AddProductForm from "./Components/Products/AddProductForm";

const routes = [
  { path: "/", component: <Dashboard />, title: "Dashboard" },
  { path: "/product", component: <Product />, title: "Product" },
  {
    path: "/product/add-product",
    component: <AddProductForm />,
    title: "Add Product",
  },
  { path: "/category", component: "Category", title: "Category" },
  { path: "/orders", component: "Orders", title: "Orders" },
  { path: "/customers", component: "Customers", title: "Customers" },
  { path: "/coupons", component: "Coupons", title: "Coupons" },
  { path: "/settings", component: "Settings", title: "Settings" },
];

export default routes;
