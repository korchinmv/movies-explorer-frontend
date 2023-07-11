import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";

export const SavedMovies = () => {
  return (
    <>
      <Main>
        <SearchForm />
        <MoviesCardList />
      </Main>
      <Footer />
    </>
  );
};
