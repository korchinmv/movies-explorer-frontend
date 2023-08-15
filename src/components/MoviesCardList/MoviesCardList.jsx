import { useState, useEffect } from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { Preloader } from "../Preloader/Preloader";
import { MoreButton } from "../UI/MoreButton/MoreButton";
import {
  MOVIES_LIST_1280,
  MOVIES_LIST_480,
  SHOW_MORE_768,
  SHOW_MORE_480,
} from "../../utils/variables";

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
  const isMoviesPage = window.location.pathname === "/movies";
  const [showMovies, setShowMovies] = useState(0);
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  const showCount = () => {
    if (displayWidth > 768) {
      setShowMovies(MOVIES_LIST_1280);
    } else if (displayWidth < 480) {
      setShowMovies(MOVIES_LIST_480);
    }
  };

  const showMore = () => {
    if (displayWidth >= 768) {
      setShowMovies(showMovies + SHOW_MORE_768);
    } else if (displayWidth < 480) {
      setShowMovies(showMovies + SHOW_MORE_480);
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
        {isMoviesPage && loading ? (
          <Preloader />
        ) : unsuccessfulSearch !== "" && movies.length === 0 ? (
          <p className='movies-cards__message'>{unsuccessfulSearch}</p>
        ) : searchError !== "" ? (
          <p className='movies-cards__message'>{searchError}</p>
        ) : isMoviesPage && movies.length !== 0 ? (
          <ul className='movies-cards__list'>
            {movies.map((movie, index) => {
              if (index < showMovies) {
                return (
                  <MoviesCard
                    movie={movie}
                    key={movie.id || movie._id}
                    savedMoviesList={savedMoviesList}
                    saveMovie={saveMovie}
                    deleteMovie={deleteMovie}
                  />
                );
              }
            })}
          </ul>
        ) : (
          ""
        )}

        {isSavedMoviesPage && loading ? (
          <Preloader />
        ) : isSavedMoviesPage && movies.length !== 0 ? (
          <ul className='movies-cards__list'>
            {movies.reverse().map((movie) => {
              return (
                <MoviesCard
                  movie={movie}
                  key={movie.id || movie._id}
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
