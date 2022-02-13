import React from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import {
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
import {
  PopupsContext,
  CurrentUserContext,
  CardActionContext
} from '../contexts/index';
import {
  setExpiringItemToLS,
  getExpiringItemFromLS 
} from '../utils/custom-local-storge/expirig-local-storge';
import { getMoviesData } from '../utils/api/movies-api';
import { normalizeMoviesApiData } from '../utils/app-utils/app-utils';
import './app.css';
import ProtectedRoute from '../components/hocs/protected-route';
import { SlideMenu, NotLoggedInPopup } from '../components/index';

function App() {

  const [isAuthLoaded, setIsAuthLoaded] = React.useState(false);
  const [isSlideMenuOpen, setIsSlideMenuOpen] = React.useState(false);
  const [isNotLoggedInPopupOpen, setIsNotLoggedInPopupOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  
  const [likedMoviesIdList, setLikedMoviesIdList] = React.useState([]);

  const history = useHistory();

  const getUserMoviesHandler = () => (
    getSavedMoviesData()
    .then((userMoviesData) => {
      setLikedMoviesIdList(userMoviesData.map((movie) => movie.movieId))
      return userMoviesData;
    })
      .catch((err) => {
        console.error(`get saved movies error in app - ${err.message}`);
        return Promise.reject(err);
      })
  );

  const addMovieHandler = (newMovieData) => (
    addMovieToUsersList(newMovieData)
      .then((createdMovieData) => getUserMoviesHandler()
        .then(() => createdMovieData))
      .catch((err) => {
        console.error(`add movie to user list error in app - ${err}`);
        return Promise.reject(err);
      })
  );
  
  const deleteMovieHandler = (movieId) => (
    deleteMovieFromUserList(movieId)
      .then((deletedMovieData) => getUserMoviesHandler()
        .then(() => deletedMovieData))
      .catch((err) => {
        console.error(`delete movie to user list error in app - ${err}`);
        return Promise.reject(err);
      })
  )

  const getAllMoviesHandler = () => {
    const savedMovies = getExpiringItemFromLS('allMovies');
    if (savedMovies) return Promise.resolve(savedMovies);
    return getMoviesData()
      .then((moviesList) => {
        const handledMoviesList = normalizeMoviesApiData(moviesList);
        setExpiringItemToLS('allMovies', handledMoviesList, 1000 * 60 * 5);
        return moviesList;
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject(err);
      })
    };

  const setLoadedUser = (user) => {
    setCurrentUser(user);
    setIsAuthLoaded(true);
  };

  const getUserDataHandler = () => {
    setIsAuthLoaded(false);
    const savedUser = getExpiringItemFromLS('user');
    if (savedUser) {
      setIsAuthLoaded(true);
      setLoadedUser(savedUser);
      return Promise.resolve(savedUser);
    };
    return getUserData()
      .then((currentUserData) => {
        setIsAuthLoaded(true);
        setLoadedUser(currentUserData);
        setExpiringItemToLS('user', currentUserData, 1000 * 60 * 5);
        return currentUserData;
      })
      .catch((err) => {
        setIsAuthLoaded(true);
        setLoadedUser({});
        return Promise.reject(err);
      })
  };

  const signinHandler = (email, password) => (
    signIn(email, password)
      .then((res) => {
        console.log(res.message);
        getUserDataHandler()
          .then(() => {
            history.push('/')
            return Promise.resolve('loggedIn')
          })
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject('Во время авторизации произошла ошибка. Подождите немного и попробуйте ещё раз')
      })
  );

  const signupHandler = (name, email, password) => (
    signUp(name, email, password)
      .then((res) => {
        console.log(res.message);
        return signinHandler(email, password)
        .then(() => {
          return Promise.resolve('registered')
        })
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject('Во время регистрации произошла ошибка. Подождите немного и попробуйте ещё раз')

      })
  );

  const signoutHandler = () => {
    setIsAuthLoaded(false);
    return signOut()
    .then((res) => {
      console.log(res.message);
      setIsAuthLoaded(true);
      localStorage.removeItem('user');
      localStorage.removeItem('filteredMovies');
      setLoadedUser({});
      history.push('/');
      return Promise.resolve('registered')
    })
    .catch((err) => {
      setIsAuthLoaded(true);
      console.error(err);
      return Promise.reject('Не удалось выйти из аккаунта. Подождите немного и попробуйте ещё раз')
    }) 
  };

  const updateUserDataHandler = (name, email) => (
    updateUserData(email, name)
      .then((updatedCurrentUserData) => {
        setExpiringItemToLS('user', updatedCurrentUserData, 1000 * 60 * 5);
        setCurrentUser(updatedCurrentUserData);
        return Promise.resolve(updatedCurrentUserData);
      })
      .catch((err) => {
        console.error(err);
        return Promise.reject('Не удалось обновить данные аккаунта. Подождите немного и попробуйте ещё раз');
      })
  );

  React.useEffect(() => {
    getUserDataHandler()
      .then(() => {
        getAllMoviesHandler();
        getUserMoviesHandler();
      })
      .catch(err => console.error(err))
  }, []);

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={{isAuthLoaded, currentUser}}>
        <PopupsContext.Provider value={{setIsSlideMenuOpen, setIsNotLoggedInPopupOpen}}>
          <CardActionContext.Provider value={{addMovieHandler, deleteMovieHandler, likedMoviesIdList}} >
            <Switch>

              <Route exact path='/'>
                <MoviesPage getAllMoviesHandler={getAllMoviesHandler} />
              </Route>

              <ProtectedRoute
              exact={true}
              path='/saved-movies'
              component={SavedMoviesPage}
              getUserMoviesHandler={getUserMoviesHandler}
              />
              
              <ProtectedRoute
                exact={true}
                path='/profile'
                onSignoutButtonClick={signoutHandler}
                onUpdateButtonClick={updateUserDataHandler}
                component={ProfilePage}
              />

              <Route exact path='/signin'>
                {currentUser?.email ? <Redirect to='/' /> : <LoginPage onSigninButtonClick={signinHandler}/> }
              </Route>

              <Route exact path='/signup'>
                {currentUser?.email ? <Redirect to='/' /> : <RegisterPage  onSignupButtonClick={signupHandler} />}
              </Route>

              <Route path='*'>
                <NotFoundPage />
              </Route>

            </Switch>

            {isSlideMenuOpen
            && <SlideMenu isOpen={isSlideMenuOpen} />}

            {isNotLoggedInPopupOpen 
            && <NotLoggedInPopup />}

          </CardActionContext.Provider>
        </PopupsContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;
