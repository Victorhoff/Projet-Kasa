import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav className="navigation">
        <Link to="/projet-kasa/">
          <img className="navigation__logo" src="logo.png" alt="logo kasa" />
        </Link>
        <ul>
          <NavLink to="/projet-kasa/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/projet-kasa/About">
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
