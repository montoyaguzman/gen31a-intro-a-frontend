import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
  // Función para cambiar el estilo del link activo
  // https://reactrouter.com/en/main/components/nav-link#navlink
  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is--active' : 'header__item-link'
  }  
  return (
    <header>
      <nav className="header">
        <NavLink to="/" className="header__logo">
          Rick And Morty Api
        </NavLink>
        <ul className="header__nav-list">
          <li className="header__list-item">
            <NavLink
                to="/"
                className={({ isActive })=>linkIsActive(isActive)}
            >
                Home
            </NavLink>
           </li>
          <li className="header__list-item">
            <NavLink
                to="/dashboard"
                className={({ isActive })=>linkIsActive(isActive)}
            >
                Dashboard
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink
                to="/about"
                className={({ isActive })=>linkIsActive(isActive)}
            >
                About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
