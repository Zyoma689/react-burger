import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux";
import {PATH} from "../../utils/constants";
import {routePropTypes} from "../../utils/custom-prop-types";
import PropTypes from "prop-types";

export default function ProtectedRoute({ children, ...rest }) {
  const { isAuthenticated } = useSelector(state => state.access);

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

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
  rest: routePropTypes,
};