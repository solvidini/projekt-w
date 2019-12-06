import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter onUpdate={() => window.scrollTo(0,0)}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
