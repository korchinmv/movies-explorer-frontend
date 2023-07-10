import { Main } from "../Main/Main";
import { SearchForm } from "../elements/SearchForm/SearchForm";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import { Footer } from "../Footer/Footer";
export const Movies = () => {
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
