// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
// Local | React-Redux
import App from "./app";
// Styles
import "./styles/index.scss";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
