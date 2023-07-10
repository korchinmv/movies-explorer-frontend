import { MoviesCard } from "../MoviesCard/MoviesCard";
import image from "../../images/movies/movie.jpg";

export const MoviesCardList = () => {
  return (
    <section className='movies-cards'>
      <div className='container'>
        <ul className='movies-cards__list'>
          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />

          <MoviesCard
            title='Фильм'
            duration='1ч 47м'
            image={image}
            link='https://www.youtube.com/watch?v=Zg1NhmDxu2w'
          />
        </ul>

        <button
          className='movies-cards__more'
          aria-label='Добавить больше фильмов на страницу'
        >
          Ещё
        </button>
      </div>
    </section>
  );
};
