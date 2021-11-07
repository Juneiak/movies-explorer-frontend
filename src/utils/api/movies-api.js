import { checkStatus, moviesApiUrl } from './api-utils';

const getMoviesData = () => (
  fetch(moviesApiUrl, {
    method: 'GET'
  })
  .then(checkStatus)
);

export { getMoviesData };
