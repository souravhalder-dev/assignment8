import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import Installation from "../Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
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
    ],
  },
]);
export { router };
