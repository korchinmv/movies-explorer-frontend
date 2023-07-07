import { BurgerMenu } from "../UI/BurgerMenu/BurgerMenu";
import { ProfileButton } from "../UI/ProfileButton/ProfileButton";

export const HeaderNav = ({ active, setActive }) => {
  return (
    <>
      <div className='header__movie-links'>
        <a className='header__movie-link hover-link' href='#'>
          Фильмы
        </a>
        <a className='header__movie-link hover-link' href='#'>
          Сохранённые фильмы
        </a>
      </div>
      <ProfileButton />
      <BurgerMenu onClick={() => setActive(!active)} />
    </>
  );
};
