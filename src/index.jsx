import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { currencies, convertRelative, getRates } from "./lib/currency";

ReactDOM.render(
  <p>Hello World!</p>,
  document.querySelector(".root")
);
