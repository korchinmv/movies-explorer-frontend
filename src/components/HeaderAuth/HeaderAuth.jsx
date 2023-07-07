import { Link } from "react-router-dom";

export const HeaderAuth = () => {
  return (
    <div className='header__links'>
      <a className='header__link hover-link' href='#'>
        Регистрация
      </a>
      <a className='header__link header__link_button hover-link' href='#'>
        Войти
      </a>
    </div>
  );
};
