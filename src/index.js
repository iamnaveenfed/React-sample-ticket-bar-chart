import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import themes from "devextreme/ui/themes";
import App from "./App";

themes.initialized(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("app")
  )
);
