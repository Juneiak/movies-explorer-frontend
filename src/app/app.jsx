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
import './app.css';

function App() {
  return (
    <div className="app">
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
    </div>
  )
}
export default App;
