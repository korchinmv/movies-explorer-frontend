import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Preloader } from "../Preloader/Preloader";

export const MoviesCardList = ({
  movies,
  unsuccessfulSearch,
  searchError,
  loading,
}) => {
  return (
    <section className='movies-cards'>
      <div className='container'>
        {loading ? (
          <Preloader />
        ) : unsuccessfulSearch !== "" ? (
          <p className='movies-cards__message'>{unsuccessfulSearch}</p>
        ) : searchError !== "" ? (
          <p className='movies-cards__message'>{searchError}</p>
        ) : movies.length !== 0 ? (
          <ul className='movies-cards__list'>
            {movies.map((movie) => {
              return <MoviesCard movie={movie} key={movie.id} />;
            })}
          </ul>
        ) : (
          ""
        )}

        {movies.length > 2 ? (
          <button
            className='movies-cards__more hover-link'
            aria-label='Добавить больше фильмов на страницу'
          >
            Ещё
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
