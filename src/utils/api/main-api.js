import { checkStatus, mainApiUrl } from './api-utils';

const signIn = (email, password) => (
  fetch(`${mainApiUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(checkStatus)
  .then((res) => {
    console.log(res.message);
    return res;
  })
);

const signUp = (name, email, password) => (
  fetch(`${mainApiUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(checkStatus)
  .then((res) => {
    console.log(res.message);
    return res;
  })
);

const signOut = () => (
  fetch(`${mainApiUrl}/signout`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(checkStatus)
  .then((res) => {
    console.log(res.message);
    return res;
  })
);

const getUserData = () => (
  fetch(`${mainApiUrl}/users/me`, {
    method: 'GET',
    credentials: 'include',
  })
  .then(checkStatus)
);

const updateUserData = (email, name) => {
  fetch(`${mainApiUrl}/users/me`, {
    method: 'UPDATE',
    credentials: 'include',
    body: JSON.stringify({ email, name })
  })
  .then(checkStatus)
};

const getMoviesData = () => (
  fetch(`${mainApiUrl}/movies`, {
    method: 'GET',
    credentials: 'include'
  })
  .get(checkStatus)
);

const addToMyMovie = ({ movieData }) => {
  fetch(`${mainApiUrl}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...movieData })
  })
  .then(checkStatus)
}

const deleteMovie = (movieId) => {
  fetch(`${mainApiUrl}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  .then(checkStatus)
}

export {
  updateUserData,
  getUserData,
  signIn,
  signUp,
  signOut,
  getMoviesData,
  addToMyMovie,
  deleteMovie,
};
