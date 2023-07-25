import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { useState, useEffect } from "react";

export const SavedMovies = ({ isLoggedIn, savedMoviesList, deleteMovie }) => {
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    setLikedMovies(savedMoviesList);
  }, [savedMoviesList]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <SearchForm />
        <MoviesCardList movies={likedMovies} deleteMovie={deleteMovie} />
      </Main>
      <Footer />
    </>
  );
};
