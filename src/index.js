// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// added the ThemeProvider to wrap to app 
import { ThemeProvider } from "styled-components";
import theme from "./Theme/index";
import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
