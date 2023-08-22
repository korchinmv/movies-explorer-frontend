import { SHORT_MOVIE } from "../utils/variables";

const searchMovies = (moviesList, inputValue, checkbox) => {
  if (inputValue === undefined) {
    return (inputValue = "");
  }
  inputValue = inputValue.toLowerCase().trim();

  const foundMovies = moviesList.filter((movie) => {
    if (checkbox) {
      return (
        (movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.description.toLowerCase().includes(inputValue)) &
        (movie.duration < SHORT_MOVIE)
      );
    } else {
      return (
        movie.nameRU.toLowerCase().includes(inputValue) ||
        movie.description.toLowerCase().includes(inputValue)
      );
    }
  });

  localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
  localStorage.setItem("inputValue", JSON.stringify(inputValue));
  localStorage.setItem("checkboxValue", JSON.stringify(checkbox));

  return foundMovies;
};

export default searchMovies;
