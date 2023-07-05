import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__box'>
          <a className='header__logo' href='/'>
            <img
              className='header__img'
              src={logo}
              alt='Логотип Movies-Explorer'
            />
          </a>

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
