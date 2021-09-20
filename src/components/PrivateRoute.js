import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { GlobalContext } from "../Context/Context";

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}

export default PrivateRoute;
