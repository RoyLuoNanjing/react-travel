import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css"; //全局引用 ant design
import "./i18n/configs";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

//调用api时候不用每次都声明x-icode
axios.defaults.headers["x-icode"] = "5D1DFB0DABDA9144";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
