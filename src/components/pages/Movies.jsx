import { useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import searchMovies from "../../utils/searchMovies";

export const Movies = ({ isLoggedIn, apiMoviesList }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unsuccessfulSearch, setUnsuccessfulSearch] = useState("");
  const [searchError, setSearchError] = useState("");

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSearchMovies = async (inputValue, checkbox) => {
    setLoading(true);
    await timeout(1500);
    try {
      const result = await searchMovies(apiMoviesList, inputValue, checkbox);

      if (result.length === 0) {
        setUnsuccessfulSearch("Ничего не найдено");
      } else {
        setUnsuccessfulSearch("");
      }

      setLoading(false);
      setMovies(result);
    } catch (err) {
      console.log(err);
      setSearchError(
        "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
      );
    }
    setLoading(false);
  };

  const resetMovies = () => {
    setMovies([]);
  };

  // useEffect(() => {
  //   if (searchedMovies.length !== 0) {
  //     setMovies(searchedMovies);
  //   }
  // }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <SearchForm
          handleSearchMovies={handleSearchMovies}
          resetMovies={resetMovies}
          unsuccessfulSearch={unsuccessfulSearch}
        />

        <MoviesCardList
          movies={movies}
          setMovies={setMovies}
          unsuccessfulSearch={unsuccessfulSearch}
          searchError={searchError}
          loading={loading}
        />
      </Main>

      <Footer />
    </>
  );
};
