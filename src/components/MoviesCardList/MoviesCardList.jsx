import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Preloader } from "../Preloader/Preloader";
import { MoreButton } from "../UI/MoreButton/MoreButton";

export const MoviesCardList = ({
  movies,
  unsuccessfulSearch,
  searchError,
  loading,
}) => {
  const isSavedMoviesPage = window.location.pathname === "/saved-movies";

  return (
    <section className="movies-cards">
      <div className="container">
        {loading ? (
          <Preloader />
        ) : unsuccessfulSearch !== "" ? (
          <p className="movies-cards__message">{unsuccessfulSearch}</p>
        ) : searchError !== "" ? (
          <p className="movies-cards__message">{searchError}</p>
        ) : movies.length !== 0 ? (
          <ul className="movies-cards__list">
            {movies.map((movie) => {
              return <MoviesCard movie={movie} key={movie.id} />;
            })}
          </ul>
        ) : (
          ""
        )}

        {!isSavedMoviesPage ? movies.length > 2 ? <MoreButton /> : "" : ""}
      </div>
    </section>
  );
};
