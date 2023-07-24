import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";

export const SavedMovies = ({ isLoggedIn, savedMovies, isSavedMoviesPage }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} color={"header_main"} />
      <Main>
        <SearchForm />
        <MoviesCardList
          movies={savedMovies}
          savedMovies={savedMovies}
          isSavedMoviesPage={isSavedMoviesPage}
        />
      </Main>
      <Footer />
    </>
  );
};
