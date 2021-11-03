const mainApiUrl = 'https://api.juneiak.movieproject.nomoredomains.monster';
const moviesApiUrl = 'https://api.nomoreparties.co/beatfilm-movies';

const checkStatus = (res) => {
  if (res.ok) return res.json()
  else Promise.reject(`FetchError: ${res.status} - ${res.message}`);
}


export { checkStatus, mainApiUrl, moviesApiUrl };
