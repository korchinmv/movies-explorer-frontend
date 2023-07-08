import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";

export const Logo = ({ position }) => {
  return (
    <Link className={`${position} logo hover-link`} to='/'>
      <img className='header__img' src={logo} alt='Логотип Movies-Explorer' />
    </Link>
  );
};
