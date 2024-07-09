import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StyledEngineProvider } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StyledEngineProvider>
);
