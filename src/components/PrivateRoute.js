import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { Consumer } from "../context";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Consumer>
      {value => {
        const { isAuthenticated } = value;
        return (
          <Route
            {...rest}
            render={props =>
              cookies.get("token") || isAuthenticated ? (
                <Component {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        );
      }}
    </Consumer>
  );
};

export default PrivateRoute;
