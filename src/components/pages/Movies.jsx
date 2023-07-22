import { useState } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import searchMovies from "../../utils/searchMovies";

export const Movies = ({ isLoggedIn, movies, setMovies }) => {
  const [renderPage, setRenderPage] = useState(true);
  console.log(renderPage, searchMovies);

  const handleSearchMovies = (inputValue, checkbox) => {
    // const findedMovies = searchMovies(movies, inputValue, checkbox);
    // setMovies(findedMovies);
    console.log(movies);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <SearchForm handleSearchMovies={handleSearchMovies} />
        <MoviesCardList movies={movies} setMovies={setMovies} />
      </Main>
      <Footer />
    </>
  );
};
