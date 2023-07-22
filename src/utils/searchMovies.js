const searchMovies = (moviesList, inputValue, checkbox, tagSavedMovies) => {
  const foundMovies = [];
  inputValue = inputValue.toLowerCase();
  moviesList.forEach((movie) => {
    if (
      checkbox
        ? movie.nameRU.toLowerCase().includes(inputValue) &
            (movie.duration < 40) ||
          movie.nameEN.toLowerCase().includes(inputValue) &
            (movie.duration < 40)
        : movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
    ) {
      foundMovies.push(movie);
    }
  });
  if (!tagSavedMovies) {
    localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
    localStorage.setItem("inputValue", JSON.stringify(inputValue));
    localStorage.setItem("checkbox", JSON.stringify(checkbox));
  }
  return foundMovies;
};

export default searchMovies;
