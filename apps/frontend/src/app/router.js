import {
    createBrowserRouter,
  } from "react-router-dom";
import Archived from "../views/archived";
import News from "../views/news";

const MAIN_VIEW = '/';
const ARCHIVED_VIEW = '/archivos';

export const router = createBrowserRouter([
    {
      path: MAIN_VIEW,
      element: <News />
    },
    {
      path: ARCHIVED_VIEW,
      element: <Archived />,
      exact: true
    },
  ]);