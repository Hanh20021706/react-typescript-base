import { Suspense, lazy } from "react";
import { I18nextProvider } from "react-i18next";

import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import Loading from "@Helpers/loading.tsx";
import delayApp from "@Helpers/delay-app.tsx";
import { resources } from "./language/language.ts";
import i18next from "i18next";
import { LANGUAGE } from "./constants/language.ts";

const RouteRender = lazy(() =>
  delayApp(import("./app/router/render-router.tsx"))
);

i18next.init({
  resources,
  interpolation: { escapeValue: false },
  lng: LANGUAGE.VI,
});

render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <I18nextProvider i18n={i18next}>
        <RouteRender />
      </I18nextProvider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);
