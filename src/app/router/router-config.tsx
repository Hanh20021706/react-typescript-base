import Home from "@Page/home";
import { appRouter } from "./router";
import ProductPage from "@Page/products";

const routesConfig = [
  {
    path: appRouter.HOME,
    element: <Home />,
  },
  {
    path: appRouter.PRODUCTS,
    element: <ProductPage />,
  },
];

export default routesConfig;
