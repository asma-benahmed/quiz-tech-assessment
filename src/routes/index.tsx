/*  istanbul ignore file  */

import { lazy } from "react";

const Quiz = lazy(() => import("../pages/quiz"));

const routes = [
  {
    path: "quiz",
    element: <Quiz />,
  },
];

export default routes;
