import React from 'react';
import { Route, Switch } from 'react-router';
import {
  Main,
  Movies,
  Login,
  Register,
  SavedMovies,
  Profile,
} from '../pages';
import { Header, Footer } from '../components';
import './app.css';

function App() {
  return (
  <div className="app">
    <div className="page">
      <Switch>

        <Header />

        <Route path='/'>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Footer />


        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/signin'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Register />
        </Route>

      </Switch>
    </div>
  </div>
  )
}
export default App;
