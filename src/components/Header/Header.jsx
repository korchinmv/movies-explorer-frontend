import logo from "../../images/logo.svg";
import { HeaderAuth } from "../HeaderAuth/HeaderAuth";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { useState } from "react";

export const Header = ({ isLoggedIn }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className='header'>
      <div className='container'>
        <nav className='header__nav'>
          <a className='header__logo hover-link' href='/'>
            <img
              className='header__img'
              src={logo}
              alt='Логотип Movies-Explorer'
            />
          </a>

          {!isLoggedIn ? <HeaderAuth /> : <HeaderNav />}
        </nav>
      </div>

      <MobileMenu active={menuActive} setActive={setMenuActive} />
    </header>
  );
};
