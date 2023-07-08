import React from "react";
import logo from "../../../images/arrow-right.svg";
import { SwitchToggle } from "../../UI/SwitchToggle/SwitchToggle";

export const SearchForm = () => {
  return (
    <section className='search'>
      <div className='container'>
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
                position={"search-form__toggle"}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
