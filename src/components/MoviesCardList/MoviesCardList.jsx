import { useState } from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard";

export const MoviesCardList = () => {
  const [preloader, setPreloader] = useState();
  const jsonMovies = localStorage.getItem("movies");
  const movies = JSON.parse(jsonMovies);

  return (
    <section className='movies-cards'>
      <div className='container'>
        <ul className='movies-cards__list'>
          {movies.map((movie) => {
            return <MoviesCard movie={movie} key={movie.id} />;
          })}
        </ul>

        <button
          className='movies-cards__more hover-link'
          aria-label='Добавить больше фильмов на страницу'
        >
          Ещё
        </button>
      </div>
    </section>
  );
};
