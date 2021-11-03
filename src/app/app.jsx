import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MainPage,
  MoviesPage,
  LoginPage,
  RegisterPage,
  SavedMoviesPage,
  ProfilePage,
  NotFoundPage,
} from '../pages';
import SlideMenu from '../components/slide-menu/slide-menu';
import './app.css';
import { SlideMenuContext, LoggedInUserDataContext} from '../contexts/index';

function App() {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = React.useState(false);
  const [logedInUserData, setUser] = React.useState(false);

  return (
    <div className='app'>
      <LoggedInUserDataContext.Provider value={{logedInUserData, setUser}}>
        <SlideMenuContext.Provider value={setIsSlideMenuOpen}>
          <Switch>

            <Route exact path='/'>
              <MainPage />
            </Route>

            <Route path='/movies'>
              <MoviesPage />
            </Route>

            <Route path='/saved-movies'>
              <SavedMoviesPage />
            </Route>

            <Route path='/profile'>
              <ProfilePage />
            </Route>

            <Route path='/signin'>
              <LoginPage />
            </Route>

            <Route path='/signup'>
              <RegisterPage />
            </Route>

            <Route path='*'>
              <NotFoundPage />
            </Route>

          </Switch>

          {isSlideMenuOpen
          && <SlideMenu isOpen={isSlideMenuOpen} />}
        </SlideMenuContext.Provider>
      </LoggedInUserDataContext.Provider>
    </div>
  );
}
export default App;
