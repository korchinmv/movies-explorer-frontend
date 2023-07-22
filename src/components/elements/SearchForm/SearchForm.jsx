import React, { useState } from "react";
import logo from "../../../images/arrow-right.svg";
import { SwitchToggle } from "../../UI/SwitchToggle/SwitchToggle";
import { SwitchToggleMobile } from "../../UI/SwitchToggle/SwitchToggleMobile/SwitchToggleMobile";
import { useForm } from "../../../hooks/useForm";

export const SearchForm = ({ handleSearchMovies, flag }) => {
  const [checkbox, setCheckbox] = useState(false);
  const { form, errors, isValid, handleChange } = useForm({});
  console.log(handleSearchMovies);

  // сабмит формы поиска
  const handleSubmit = (e) => {
    e.preventDefault();
    // handleSearchMovies(form.search, checkbox);
  };

  // переключатель состояния checkbox
  const handleCheckbox = () => {
    setCheckbox(!checkbox);
    localStorage.setItem("checkbox", JSON.stringify(!checkbox));
  };

  return (
    <div className="search">
      <div className="container container_movies-mobile">
        <div className="search__wrapper">
          <form className="search__form" action="#" onSubmit={handleSubmit}>
            <div className="search__inner">
              <input
                className="search__input"
                type="text"
                name="search"
                required
                placeholder="Фильм"
                minLength={2}
                maxLength={90}
                value={form.search || ""}
                onChange={handleChange}
              />
              <button
                className="search__button hover-link"
                aria-label="Поиск фильма"
                type="submit"
              >
                <img className="search__arrow" src={logo} alt="Стрелка" />
              </button>
              <SwitchToggle
                name={"Короткометражки"}
                position={"search__toggle"}
                handleCheckbox={handleCheckbox}
              />
            </div>
            <SwitchToggleMobile
              name={"Короткометражки"}
              handleCheckbox={handleCheckbox}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
