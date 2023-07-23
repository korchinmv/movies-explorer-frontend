import React, { useEffect, useState } from "react";
import logo from "../../../images/arrow-right.svg";
import { SwitchToggle } from "../../UI/SwitchToggle/SwitchToggle";
import { SwitchToggleMobile } from "../../UI/SwitchToggle/SwitchToggleMobile/SwitchToggleMobile";
import { useForm } from "../../../hooks/useForm";

export const SearchForm = ({
  handleSearchMovies,

  flag,
}) => {
  const [checkbox, setCheckbox] = useState(false);
  const { form, isValid, handleChange } = useForm({});
  const [showHint, setShowHint] = useState(true);
  const [searchInputForm, setSearchInputForm] = useState("");
  const [renderSearchPage, setRenderSearchPage] = useState(false);

  //проверка валидности формы поиска
  useEffect(() => {
    isValid === false ? setShowHint(true) : setShowHint(false);
  }, [isValid]);

  //
  useEffect(() => {
    const checked = JSON.parse(localStorage.getItem("checkbox"));
    const valueInput = JSON.parse(localStorage.getItem("inputValue"));

    if (valueInput) {
      setSearchInputForm(valueInput);
    }

    if (checked === true) {
      setCheckbox(true);
    }

    setRenderSearchPage(true);
  }, []);

  // сабмит формы поиска
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchMovies(form.search, checkbox);
  };

  const resetForm = () => {
    const form = document.querySelector(".search__form");
    form.reset();
  };

  // переключатель состояния checkbox
  const handleCheckbox = () => {
    setCheckbox(!checkbox);
    handleSearchMovies(form.search, !checkbox);
  };

  return (
    renderSearchPage && (
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
                  placeholder="Поиск"
                  minLength={2}
                  maxLength={90}
                  value={searchInputForm !== "" ? form.search : ""}
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

              {showHint && (
                <p className="search__error">Нужно ввести ключевое слово</p>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  );
};
