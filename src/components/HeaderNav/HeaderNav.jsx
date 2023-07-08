import { Link } from "react-router-dom";
import { BurgerMenu } from "../UI/BurgerMenu/BurgerMenu";
import { ProfileButton } from "../UI/ProfileButton/ProfileButton";

export const HeaderNav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className='header__movie-links'>
        <Link className='header__movie-link hover-link' to='/movies'>
          Фильмы
        </Link>
        <Link className='header__movie-link hover-link' to='/saved-movies'>
          Сохранённые фильмы
        </Link>
      </div>
      <ProfileButton />
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
