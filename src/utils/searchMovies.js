const searchMovies = (moviesList, inputValue, checkbox, tagSavedMovies) => {
  if (inputValue === undefined) {
    return (inputValue = "");
  }
  inputValue = inputValue.toLowerCase();

  const foundMovies = moviesList.filter((movie) => {
    if (checkbox) {
      return (
        movie.description.toLowerCase().includes(inputValue) &
        (movie.duration < 40)
      );
    } else {
      return movie.description.toLowerCase().includes(inputValue);
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
