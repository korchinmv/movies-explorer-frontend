import React from "react";

export const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <a className='navigation__link hover-link' href='#project'>
            О проекте
          </a>
        </li>

        <li className='navigation__item'>
          <a className='navigation__link hover-link' href='#technologys'>
            Технологии
          </a>
        </li>

        <li className='navigation__item'>
          <a className='navigation__link hover-link' href='#about-student'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};
