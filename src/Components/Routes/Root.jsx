import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import Installation from "../Installation/Installation";
import AppsinfoPage from "../Apps/AppsinfoPage";
import ErrorPage from "../Erorr/ErrorPage";
import AppsError from "../Erorr/AppsError";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/appsData.json"),
        path: "/",
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "apps/:id",
        errorElement: <AppsError></AppsError>,
        loader: () => fetch("/appsData.json"),
        Component: AppsinfoPage,
      },
    ],
  },
]);
export { router };
