import Home from "@Page/home";
import { appRouter } from "./router";
import ProductPage from "@Page/products";
import Login from "@Page/user/login";

const routesConfig = [
  {
    path: appRouter.HOME,
    element: <Home />,
  },
  {
    path: appRouter.PRODUCTS,
    element: <ProductPage />,
  },
  {
    path: appRouter.LOGIN,
    element: <Login />,
  },
];

export default routesConfig;
