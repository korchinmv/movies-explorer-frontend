import { TitleBlock } from "../elements/TitleBlock/TitleBlock";
import photo from "../../images/student.jpg";
import arrow from "../../images/arrow-portfolio.svg";

export const AboutStudent = () => {
  return (
    <section className='about-student' id='about-student'>
      <div className='container'>
        <TitleBlock name='Студент' margin='about-student__title' />
        <div className='about-student__wrapper'>
          <div className='about-student__box'>
            <h3 className='about-student__name'>Максим Корчин</h3>
            <p className='about-student__profession'>
              Фронтенд-разработчик, 32 года
            </p>
            <p className='about-student__description'>
              Я родился в городе Караганда, в данный момент проживаю в Москве. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Начал увлекаться разработкой с 2021 года. С 2015 года
              работаю в компании «ООО Мобильные решения». После того, как прошёл
              курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
              постоянной работы.
            </p>
            <a
              className='about-student__link hover-link'
              rel='noreferrer'
              href='https://github.com/korchinmv'
              target='_blank'
            >
              Github
            </a>
          </div>

          <img
            className='about-student__image'
            src={photo}
            alt='Фото студента'
          />
        </div>

        <span className='about-student__portfolio'>Портфолио</span>
        <ul className='about-student__items'>
          <li className='about-student__item'>
            <a
              className='about-student__item-link hover-link'
              rel='noreferrer'
              href='https://korchinmv.github.io/russian-travel/'
              target='_blank'
            >
              Статичный сайт
              <img className='about-student__arrow' src={arrow} alt='Стрелка' />
            </a>
          </li>
          <li className='about-student__item'>
            <a
              className='about-student__item-link hover-link'
              rel='noreferrer'
              href='https://korchinmv.github.io/nura_elite/'
              target='_blank'
            >
              Адаптивный сайт
              <img className='about-student__arrow' src={arrow} alt='Стрелка' />
            </a>
          </li>
          <li className='about-student__item'>
            <a
              className='about-student__item-link hover-link'
              rel='noreferrer'
              href='https://korchinmv.github.io/mesto-react/'
              target='_blank'
            >
              Одностраничное приложение
              <img className='about-student__arrow' src={arrow} alt='Стрелка' />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
