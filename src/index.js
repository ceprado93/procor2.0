import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
let hashHistory = Router.hashHistory;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router history={hashHistory}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
