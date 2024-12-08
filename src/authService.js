// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
export const mockLogin = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1000);
    });
  };

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
