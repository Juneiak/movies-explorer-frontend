import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/index';
import { Preloader } from '../index';

const ProtectedRoute = ({ component: Component, path, exact, ...props }) => {
  const { isAuthLoaded, currentUser } = React.useContext(CurrentUserContext);
  return (
    <Route exact={exact} path={path}>
      { !isAuthLoaded
      ? < Preloader />
      : currentUser.email
      ? <Component {...props} />
      : <Redirect to='/' />
    }
    </Route>
  );
};

export default ProtectedRoute;
