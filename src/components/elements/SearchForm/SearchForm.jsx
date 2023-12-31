import React from "react";
import logo from "../../../images/arrow-right.svg";
import { SwitchToggle } from "../../UI/SwitchToggle/SwitchToggle";
import { SwitchToggleMobile } from "../../UI/SwitchToggle/SwitchToggleMobile/SwitchToggleMobile";

export const SearchForm = () => {
  return (
    <div className='search'>
      <div className='container container_movies-mobile'>
        <div className='search__wrapper'>
          <form className='search__form' action='#'>
            <div className='search__inner'>
              <input
                className='search__input'
                type='text'
                required
                placeholder='Фильм'
                minLength={2}
                maxLength={90}
              />
              <button
                className='search__button hover-link'
                aria-label='Поиск фильма'
                type='submit'
              >
                <img className='search__arrow' src={logo} alt='Стрелка' />
              </button>
              <SwitchToggle
                name={"Короткометражки"}
                position={"search__toggle"}
              />
            </div>
            <SwitchToggleMobile name={"Короткометражки"} />
          </form>
        </div>
      </div>
    </div>
  );
};
