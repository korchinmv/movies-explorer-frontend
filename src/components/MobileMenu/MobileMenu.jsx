import React from "react";
import { ProfileButton } from "../UI/ProfileButton/ProfileButton";
import { BurgerMenu } from "../UI/BurgerMenu/BurgerMenu";

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`header__menu ${isOpen && "header__menu_active"}`}>
      <BurgerMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        position={"header__menu-burger"}
      />
      <div className='header__menu-wrapper'>
        <ul className='header__menu-list'>
          <li className='header__menu-item'>
            <a className='header__menu-link hover-link' href='#'>
              Главная
            </a>
          </li>

          <li className='header__menu-item'>
            <a
              className='header__menu-link header__menu-link_active hover-link'
              href='#'
            >
              Фильмы
            </a>
          </li>

          <li className='header__menu-item'>
            <a className='header__menu-link hover-link' href='#'>
              Сохранённые фильмы
            </a>
          </li>
        </ul>

        <ProfileButton position={"header__menu-profile"} />
      </div>
    </div>
  );
};
