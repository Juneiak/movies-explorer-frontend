const toFilter = (data, searchParams) => {
  const filterRegex = new RegExp(searchParams.searchText.toLowerCase());
  if (searchParams.isShortFilm) return data.filter(item => {
    if (item.duration <= 40) return filterRegex.test(item.nameRU.toLowerCase())
    else return false
  })
  else return data.filter(item => filterRegex.test(item.nameRU.toLowerCase()))
};

export { toFilter };
