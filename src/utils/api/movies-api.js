import { checkStatus, moviesApiUrl } from './api-utils';

const moviesData = () => (
  fetch(moviesApiUrl, {
    method: 'GET'
  })
  .then(checkStatus)
);

export { moviesData };
