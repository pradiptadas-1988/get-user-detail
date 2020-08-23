import React from "react";

import APP_CONSTANT from "../constant";
import GetUserDetail from "./GetUserDetail/GetUserDetail";
import "./css/style.css";

const App = () => {
  return (
    <div id="container_div" className="container">
      <h1>{APP_CONSTANT.APPLICATION_HEADING}</h1>
      <hr />
      <div id="row_div" className="row">
        <div className="col-md-4">
        </div>
        <div id="user_form" className="col-md-4">
          <GetUserDetail />
        </div>
        <div className="col-md-4">
        </div>
      </div>
    </div>
  );
};

export default App;
