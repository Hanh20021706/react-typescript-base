import { Suspense, lazy } from "react";

import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import Loading from "@Helpers/loading.tsx";
import delayApp from "@Helpers/delay-app.tsx";
const RouteRender = lazy(() =>
  delayApp(import("./app/router/render-router.tsx"))
);

render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <RouteRender />
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
