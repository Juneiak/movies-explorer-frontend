import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import {
  MainPage,
  MoviesPage,
  LoginPage,
  RegisterPage,
  SavedMoviesPage,
  ProfilePage,
  NotFoundPage,
} from '../pages';
import {
  signIn,
  signOut,
  signUp,
  getUserData,
  updateUserData,
} from '../utils/api/main-api';
import SlideMenu from '../components/slide-menu/slide-menu';
import './app.css';
import { SlideMenuContext, CurrentUserContext} from '../contexts/index';
import ProtectedRoute from '../components/hocs/protected-route';

function App() {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  const getUserDataHandler = () => {
    return getUserData()
      .then((currentUserData) => {
        setCurrentUser(currentUserData);
        return currentUserData;
      })
      .catch((err) => {
        console.error(`get current user data error in app - ${err}`);
        setCurrentUser({});
      })
  };

  const signinHandler = (email, password) => {
    signIn(email, password)
      .then((res) => {
        console.log(res.message);
        getUserDataHandler()
          .then(() => history.push('/movies'))
      })
      .catch((err) => console.error(`signIn error in app - ${err}`))
  };

  const signupHandler = (name, email, password) => {
    signUp(name, email, password)
      .then((res) => {
        console.log(res.message);
        getUserDataHandler()
        .then(() => history.push('/movies'))
      })
      .catch((err) => console.error(`signUp error in app - ${err}`))
  };

  const signoutHandler = () => {
    signOut()
    .then((res) => {
      console.log(res.message);
      setCurrentUser({});
      history.push('/');
    })
    .catch((err) => console.error(`signOut error in app - ${err}`)) 
  };

  const updateUserDataHandler = (email, name) => {
    updateUserData(email, name)
      .then((updatedCurrentUserData) => {
        setCurrentUser(updatedCurrentUserData);
      })
      .catch((err) => console.error(`current user data update error in app - ${err}`));
  };

  React.useEffect(() => {
    getUserDataHandler();
  }, []);

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <SlideMenuContext.Provider value={setIsSlideMenuOpen}>
          <Switch>

            <Route exact path='/'>
              <MainPage />
            </Route>

            <ProtectedRoute
            path='/movies'
            component={MoviesPage}
            />

            <ProtectedRoute
            path='/saved-movies'
            component={SavedMoviesPage}
            />

            <ProtectedRoute
              path='/profile'
              onSignoutButtonClick={signoutHandler}
              onUpdateButtonClick={updateUserDataHandler}
              component={ProfilePage}
            />

            <Route path='/signin'>
              <LoginPage onSigninButtonClick={signinHandler} />
            </Route>

            <Route path='/signup'>
              <RegisterPage  onSignupButtonClick={signupHandler} />
            </Route>

            <Route path='*'>
              <NotFoundPage />
            </Route>

          </Switch>

          {isSlideMenuOpen
          && <SlideMenu isOpen={isSlideMenuOpen} />}
        </SlideMenuContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
