import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__box'>
          <img
            className='header__logo'
            src={logo}
            alt='Логотип Movies-Explorer'
          />

          <div className='header__links'>
            {/* <Link className='header__link' to='/'></Link>
          <Link className='header__link' to='/'>
            Войти
          </Link> */}
            <a className='header__link hover-link' href='#'>
              Регистрация
            </a>
            <a className='header__link header__link_button hover-link' href='#'>
              Войти
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
