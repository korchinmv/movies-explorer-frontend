import { useState } from "react";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
import { Preloader } from "../Preloader/Preloader";
import searchMovies from "../../utils/searchMovies";

export const Movies = ({ isLoggedIn }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [unsuccessfulSearch, setUnsuccessfulSearch] = useState("");
  const [searchError, setSearchError] = useState("");
  const moviesApi = localStorage.getItem("movies");

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSearchMovies = async (inputValue, checkbox) => {
    setLoading(true);
    await timeout(1500);
    try {
      const findedMovies = await searchMovies(
        JSON.parse(moviesApi),
        inputValue,
        checkbox
      );

      if (findedMovies.length === 0) {
        setUnsuccessfulSearch("Ничего не найдено");
      } else {
        setUnsuccessfulSearch("");
      }

      setLoading(false);
      setMovies(findedMovies);
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
