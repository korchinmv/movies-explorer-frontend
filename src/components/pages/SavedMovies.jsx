import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { useState, useEffect } from "react";

export const SavedMovies = ({ isLoggedIn, savedMoviesList, deleteMovie }) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setLikedMovies(savedMoviesList);
  }, [savedMoviesList]);

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const filterSavedMovies = (inputValue, checkbox) => {
    if (checkbox) {
      const movies = savedMoviesList.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)) &&
          movie.duration <= 40
        );
      });
      setFilteredMovies(movies);
    } else {
      const movies = savedMoviesList.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
        );
      });
      setFilteredMovies(movies);
    }
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <SearchForm filterSavedMovies={filterSavedMovies} />
        <MoviesCardList
          movies={likedMovies}
          deleteMovie={deleteMovie}
          filteredMovies={filteredMovies}
        />
      </Main>
      <Footer />
    </>
  );
};
