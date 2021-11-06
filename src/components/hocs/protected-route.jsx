import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/index';

const ProtectedRoute = ({ component: Component, path, ...props }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isSignin = Boolean(currentUser?.email);

  return (
    <Route path={path}>
      {isSignin
      ? <Component {...props} />
      : <Redirect to='/' />
    }
    </Route>
  );
};

export default ProtectedRoute;
