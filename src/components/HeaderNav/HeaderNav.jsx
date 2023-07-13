import { NavLink } from "react-router-dom";
import { BurgerMenu } from "../UI/BurgerMenu/BurgerMenu";
import { ProfileButton } from "../UI/ProfileButton/ProfileButton";

export const HeaderNav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <nav className='header__movie-links'>
        <NavLink className='header__movie-link hover-link' to='/movies'>
          Фильмы
        </NavLink>
        <NavLink className='header__movie-link hover-link' to='/saved-movies'>
          Сохранённые фильмы
        </NavLink>
      </nav>
      <ProfileButton />
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
