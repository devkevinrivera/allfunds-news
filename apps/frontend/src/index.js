import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';

import {
  RouterProvider,
} from "react-router-dom";
import store from "./app/store";
import { router } from "./app/router";
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
