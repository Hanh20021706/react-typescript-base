import { useRoutes } from "react-router-dom";
import routesConfig from "./router-config";

const RouteRender = () => {
  const routes = useRoutes(routesConfig);
  return routes;
};

export default RouteRender;
