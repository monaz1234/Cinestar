import React from "react";
import { Route, Redirect } from "react-router-dom";

const Route = ({ layout: Layout, component: Component, authRequired, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");
  return (
    <Route
      {...rest}
      render={(props) =>
        authRequired && !isAuthenticated ? (
          <Redirect to="/login" />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

export default Route;
