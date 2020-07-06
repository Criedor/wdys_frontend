import React from "react";
import { Route } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  if (Cookies.get("token")) {
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } else return "error or session expired";
};

export default ProtectedRoute;
