import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
let hashHistory = Router.hashHistory;

ReactDOM.render(
  <React.StrictMode>
    <Router history={hashHistory}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
