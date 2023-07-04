import React from "react";

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item hover-link'>
          <a className='navigation__link' href='#'>
            О проекте
          </a>
        </li>

        <li className='navigation__item hover-link'>
          <a className='navigation__link' href='#'>
            Технологии
          </a>
        </li>

        <li className='navigation__item hover-link'>
          <a className='navigation__link' href='#'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};
