import {
    createBrowserRouter,
  } from "react-router-dom";
import Archived from "../views/archived";
import News from "../views/news";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <News />
    },
    {
      path: "/archivos",
      element: <Archived />,
      exact: true
    },
  ]);