import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ component: Component, ...rest }) {
  const checkLoggedIn = () => {
    let usernameLocalStorage = localStorage.getItem('username');
    let passwordLocalStorage = localStorage.getItem('password');
    if (usernameLocalStorage === 'admin' && passwordLocalStorage === 'admin') {
      return true;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkLoggedIn() ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default AuthRoute;
