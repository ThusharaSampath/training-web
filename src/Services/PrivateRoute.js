import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContex } from "./Auth";

const PrivateRoute = ({ componet: RouterComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContex);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouterComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;