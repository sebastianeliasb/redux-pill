import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom";

import App from "./App";
import { store } from "./redux/store";
import Provider from "./redux/provider";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  // <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
