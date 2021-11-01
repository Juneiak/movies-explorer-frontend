import React from 'react';
import { Route, Switch } from 'react-router';
import {
  MainPage,
  MoviesPage,
  LoginPage,
  RegisterPage,
  SavedMoviesPage,
  ProfilePage,
  NotFoundPage,
} from '../pages';
import SlideMenu from './../components/slide-menu/slide-menu';
import './app.css';
import SlideMenuContext from './../contexts/slide-menu-context';

function App() {

  const [ isSlideMenuOpen, setIsSlideMenuOpen ] = React.useState(false);

  return (
    <div className="app">
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

        {isSlideMenuOpen &&
        <SlideMenu isOpen={isSlideMenuOpen} />
        }
      </SlideMenuContext.Provider>
    </div>
  )
}
export default App;
