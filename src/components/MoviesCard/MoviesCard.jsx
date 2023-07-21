import { useState } from "react";

export const MoviesCard = ({ movie }) => {
  const [savedMovie, setSavedMovie] = useState(false);
  const isLiked = false;

  const timeЕranslation = () => {
    const totalMinutes = movie.duration;
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${hours}ч ${minutes !== 0 ? minutes + "м" : ""}`;
  };

  return (
    <li className='movies-cards__item'>
      <div className='movies-cards__head'>
        <div className='movies-cards__info'>
          <h3 className='movies-cards__title'>{movie.nameRU}</h3>
          <p className='movies-cards__duration'>
            {movie.duration > 60 ? timeЕranslation() : `${movie.duration} мин`}
          </p>
        </div>
        <button
          className={`movies-cards__favourite ${
            isLiked && "movies-cards__favourite_active"
          } ${savedMovie && "movies-cards__favourite_saved"} hover-link`}
          aria-label='Добавить фильм в избранное'
        ></button>
      </div>
      <a
        className='movies-cards__link hover-link'
        target='_blank'
        rel='noreferrer'
        href={movie.trailerLink}
      >
        <img
          className='movies-cards__image'
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt='Изображение фильма'
        />
      </a>
    </li>
  );
};
