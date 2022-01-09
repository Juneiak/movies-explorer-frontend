const toFilter = (data, searchParams) => {
  const filterRegex = new RegExp(searchParams.searchText.toLowerCase());
  if (searchParams.isShortFilm) return data.filter(item => {
    if (item.duration <= 40) return filterRegex.test(item.nameRU.toLowerCase())
    else return false
  })
  else return data.filter(item => filterRegex.test(item.nameRU.toLowerCase()))
};


const normalizeMoviesApiData = (unhandledMoviesList) => unhandledMoviesList.map((movie) => ({
  country: movie.country,
  director: movie.director,
  duration: movie.duration,
  year: movie.year,
  description: movie.description,
  image: `https://api.nomoreparties.co${movie.image.url}`,
  trailer: movie.trailerLink,
  nameRU: movie.nameRU,
  nameEN: movie.nameEN,
  thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
  movieId: movie.id,
}))

export { toFilter, normalizeMoviesApiData };

