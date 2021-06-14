import React from "react";
import ReactDOM from "react-dom";
import AuthContext from './contexts/AuthContext'
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <AuthContext>
     <App />
    </AuthContext>
    </Router>, 
document.getElementById("root"));
