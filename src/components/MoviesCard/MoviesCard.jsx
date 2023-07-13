import { useState } from "react";

export const MoviesCard = ({ title, duration, image, link }) => {
  const [savedMovie, setSavedMovie] = useState(true);
  const isLiked = true;

  return (
    <li className='movies-cards__item'>
      <div className='movies-cards__head'>
        <div className='movies-cards__info'>
          <h3 className='movies-cards__title'>{title}</h3>
          <p className='movies-cards__duration'>{duration}</p>
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
        href={link}
      >
        <img
          className='movies-cards__image'
          src={image}
          alt='Изображение фильма'
        />
      </a>
    </li>
  );
};
