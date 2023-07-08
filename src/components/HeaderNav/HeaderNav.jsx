import { useState } from "react";
import { BurgerMenu } from "../UI/BurgerMenu/BurgerMenu";
import { ProfileButton } from "../UI/ProfileButton/ProfileButton";

export const HeaderNav = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="header__movie-links">
        <a className="header__movie-link hover-link" href="#">
          Фильмы
        </a>
        <a className="header__movie-link hover-link" href="#">
          Сохранённые фильмы
        </a>
      </div>
      <ProfileButton />
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
