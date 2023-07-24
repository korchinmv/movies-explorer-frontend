import { useState, useEffect } from "react";
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
  const [shownMovies, setShownMovies] = useState(0);
  const [displayWidth, setdisplayWidth] = useState(window.innerWidth);

  function shownCount() {
    if (displayWidth >= 768) {
      setShownMovies(12);
    } else if (displayWidth < 768) {
      setShownMovies(5);
    }
  }

  function showMore() {
    if (displayWidth >= 768) {
      setShownMovies(shownMovies + 3);
    } else if (displayWidth < 768) {
      setShownMovies(shownMovies + 2);
    }
  }

  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", setdisplayWidth(window.innerWidth));
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
            {movies.map((movie) => {
              return <MoviesCard movie={movie} key={movie.id} />;
            })}
          </ul>
        ) : (
          ""
        )}

        {!loading && !isSavedMoviesPage && movies.length > 2 ? (
          <MoreButton onClick={showMore} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
