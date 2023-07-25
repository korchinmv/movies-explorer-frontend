import arrow from "../../../images/arrow-right.svg";
import { SwitchToggle } from "../../UI/SwitchToggle/SwitchToggle";
import { SwitchToggleMobile } from "../../UI/SwitchToggle/SwitchToggleMobile/SwitchToggleMobile";

export const SearchForm = ({
  handleSearchMovies,
  inputSearchForm,
  setInputSearchForm,
  checkboxValue,
  setCheckboxValue,
}) => {
  // сабмит формы поиска
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchMovies(inputSearchForm, checkboxValue);
  };

  //контролируемый инпут
  const handleInputChange = (e) => {
    setInputSearchForm(e.target.value);
  };

  // переключатель состояния checkbox
  const handleCheckbox = (e) => {
    setCheckboxValue(e.target.checked);
    handleSearchMovies(inputSearchForm, e.target.checked);
  };

  return (
    <div className='search'>
      <div className='container container_movies-mobile'>
        <div className='search__wrapper'>
          <form className='search__form' action='#' onSubmit={handleSubmit}>
            <div className='search__inner'>
              <input
                className='search__input'
                type='text'
                name='search'
                placeholder='Поиск'
                minLength={2}
                maxLength={90}
                value={inputSearchForm}
                onChange={handleInputChange}
                required
              />
              <button
                className='search__button hover-link'
                aria-label='Поиск фильма'
                type='submit'
              >
                <img className='search__arrow' src={arrow} alt='Стрелка' />
              </button>
              <SwitchToggle
                name={"Короткометражки"}
                position={"search__toggle"}
                handleCheckbox={handleCheckbox}
                checkboxValue={checkboxValue}
              />
            </div>
            <SwitchToggleMobile
              name={"Короткометражки"}
              handleCheckbox={handleCheckbox}
              checkboxValue={checkboxValue}
            />

            {!inputSearchForm && (
              <p className='search__error'>Нужно ввести ключевое слово</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
