import { Link } from "react-router-dom";

// création de la barre de navigation du site du Header
export default function Navbar() {
  const currentRoute = window.location.pathname;

  return (
    <nav className="nav">
      <ul className="nav_list">
        <li
          className={
            currentRoute === "/Kasa/" ? "nav_list_item_active" : "nav_list_item"
          }
        >
          <Link to="/Kasa/">Accueil</Link>
        </li>
        <li
          className={
            currentRoute === "/about" ? "nav_list_item_active" : "nav_list_item"
          }
        >
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
