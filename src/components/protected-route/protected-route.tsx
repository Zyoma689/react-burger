import React, {FC} from "react";
import {Route, Redirect, RouteProps, useLocation} from "react-router-dom";
import {useSelector} from "../../services/hooks";
import {PATH} from "../../utils/constants";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.access);
  const location = useLocation();


  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: PATH.LOGIN,
            state: {
              from: location,
            }
          }}
        />
        )
      }
    />
  );
};