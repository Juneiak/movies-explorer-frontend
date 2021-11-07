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
  addMovieToUsersList,
  getSavedMoviesData,
  deleteMovieFromUserList,
} from '../utils/api/main-api';
import { getMoviesData } from '../utils/api/movies-api';
import SlideMenu from '../components/slide-menu/slide-menu';
import './app.css';
import { SlideMenuContext, CurrentUserContext} from '../contexts/index';
import ProtectedRoute from '../components/hocs/protected-route';
import {
  setExpiringItemToLS,
  getExpiringItemFromLS 
} from '../utils/custom-local-storge/expirig-local-storge';
function App() {
  const [isAuthLoaded, setIsAuthLoaded] = React.useState(false);
  const [isSlideMenuOpen, setIsSlideMenuOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  const getAllMoviesHandler = () => {
    const savedMovies = getExpiringItemFromLS('allMovies');
    if (savedMovies) return Promise.resolve(savedMovies);
    return getMoviesData()
      .then((moviesList) => {
        setExpiringItemToLS('allMovies', moviesList, 1000 * 60 * 5);
        return moviesList;
      })
      .catch((err) => {
        console.error(`get movies error in app - ${err.message}`);
        return err;
      })
    };

  const setLoadedUser = (user) => {
    setCurrentUser(user);
    setIsAuthLoaded(true);
  };

  const getUserDataHandler = () => {
    setIsAuthLoaded(false);
    const savedUser = getExpiringItemFromLS('user');
    console.log(savedUser);
    if (savedUser) {
      setLoadedUser(savedUser);
      return Promise.resolve(savedUser);
    };
    return getUserData()
      .then((currentUserData) => {
        setLoadedUser(currentUserData);
        setExpiringItemToLS('user', currentUserData, 1000 * 60 * 5);
        console.log(currentUserData);
        return currentUserData;
      })
      .catch((err) => {
        console.error(`get current user data error in app - ${err.message}`);
        setLoadedUser({});
        return err;
      })
  };

  const signinHandler = (email, password) => {
    signIn(email, password)
      .then((res) => {
        console.log(res.message);
        getUserDataHandler()
          .then(() => history.push('/movies'))
      })
      .catch((err) => console.error(`signIn error in app - ${err.message}`))
  };

  const signupHandler = (name, email, password) => {
    signUp(name, email, password)
      .then((res) => {
        console.log(res.message);
        getUserDataHandler()
        .then(() => history.push('/movies'))
      })
      .catch((err) => console.error(`signUp error in app - ${err.message}`))
  };

  const signoutHandler = () => {
    setIsAuthLoaded(false);
    signOut()
    .then((res) => {
      console.log(res.message);
      localStorage.removeItem('user');
      setLoadedUser({});
      history.push('/');
    })
    .catch((err) => console.error(`signOut error in app - ${err.message}`)) 
  };

  const updateUserDataHandler = (name, email) => {
    updateUserData(email, name)
      .then((updatedCurrentUserData) => {
        setCurrentUser(updatedCurrentUserData);
      })
      .catch((err) => console.error(`current user data update error in app - ${err.message}`));
  };

  React.useEffect(() => {
    getUserDataHandler();
    getAllMoviesHandler();
  }, []);

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={{ isAuthLoaded, currentUser }}>
        <SlideMenuContext.Provider value={setIsSlideMenuOpen}>
          <Switch>

            <Route exact path='/'>
              <MainPage />
            </Route>

            <ProtectedRoute
            path='/movies'
            component={MoviesPage}
            getAllMoviesHandler={getAllMoviesHandler}
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
