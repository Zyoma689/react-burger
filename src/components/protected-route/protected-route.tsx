import React, {FC} from "react";
import {Route, Redirect, RouteProps} from "react-router-dom";
import {useSelector} from "react-redux";
import {PATH} from "../../utils/constants";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state: any) => state.access);

  return (
    <Route
      {...rest}
      render={({location}) =>
        isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: PATH.LOGIN,
            state: {
              from: location
            }
          }}
        />
        )
      }
    />
  );
}