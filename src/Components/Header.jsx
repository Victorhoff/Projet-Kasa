import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <Link to="/kasa">
          <img className="navigation__logo" src="logo.png" alt="logo kasa" />
        </Link>
        <ul>
          <NavLink to="/kasa/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/kasa/About">
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
