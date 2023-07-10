export const MoviesCard = ({ title, duration, image, link }) => {
  return (
    <li className='movies-cards__item'>
      <div className='movies-cards__head'>
        <div className='movies-cards__info'>
          <h3 className='movies-cards__title'>{title}</h3>
          <time className='movies-cards__duration'>{duration}</time>
        </div>
        <button
          className='movies-cards__favourite'
          aria-label='Добавить фильм в избранное'
        ></button>
      </div>
      <a
        className='movies-cards__link'
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
