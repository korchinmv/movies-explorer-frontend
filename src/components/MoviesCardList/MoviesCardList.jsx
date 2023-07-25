import { useState, useEffect } from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Preloader } from "../Preloader/Preloader";
import { MoreButton } from "../UI/MoreButton/MoreButton";

export const MoviesCardList = ({
  movies,
  unsuccessfulSearch,
  searchError,
  loading,
  savedMoviesList,
  saveMovie,
  deleteMovie,
}) => {
  const isSavedMoviesPage = window.location.pathname === "/saved-movies";
  const [showMovies, setShowMovies] = useState(0);
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  const showCount = () => {
    if (displayWidth > 768) {
      setShowMovies(12);
    } else if (displayWidth < 480) {
      setShowMovies(5);
    }
  };

  const showMore = () => {
    if (displayWidth >= 768) {
      setShowMovies(showMovies + 3);
    } else if (displayWidth < 480) {
      setShowMovies(showMovies + 2);
    }
  };

  useEffect(() => {
    showCount();
  }, [displayWidth, movies]);

  const handleResize = () => {
    setDisplayWidth(window.innerWidth);
  };

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", handleResize);
    }, 500);
  });

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
            {movies.slice(0, showMovies).map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id}
                  savedMoviesList={savedMoviesList}
                  saveMovie={saveMovie}
                  deleteMovie={deleteMovie}
                />
              );
            })}
          </ul>
        ) : (
          ""
        )}

        {!loading &&
        !isSavedMoviesPage &&
        movies.length > 2 &&
        movies.length > showMovies ? (
          <MoreButton showMore={showMore} savedMoviesList={savedMoviesList} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
