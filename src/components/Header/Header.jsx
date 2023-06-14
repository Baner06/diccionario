import logo from "../../Images/Logo.png";
import SocialNetworks from "./SocialNetworks";
import NavBar from "./NavBar";
import "./Header.css";
import user from "../../Images/User2.png";

export default function Header() {
  return (
    <div className="Header-Container">
      <div className="d-flex align-items-center justify-content-between">
        {/* Imagen del Logo */}
        <img
          className="Logo"
          src={logo}
          width="200px"
          heigth="200px"
          alt="Logo Supreme Fashion"
        />

        {/* Esta es el formulario de busqueda */}
        <form className="Search d-flex w-50 mx-auto" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Falta responsive en casi toda la pagina"
            aria-label="Buscar Administrador"
          />
          <button className="btn btn-outline-success-search" type="submit">
            Buscar
          </button>
        </form>

        {/* Componente que trae las redes sociales */}
        <SocialNetworks />
      </div>

      {/* NavBar */}
      <nav className="navbar navbar-expand-lg bg-rgb(30, 30, 32) navbar-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <NavBar />
          {/* Componente Desplegable */}
          <Dropdown User={user} Name="Junior Rodriguez" />
        </div>
      </nav>
    </div>
  );
}

function Dropdown({ User, Name }) {
  return (
    /* Este es el Desplegable */
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <img className="user" src={User} alt={Name} />
        <span className="User-text">{Name} </span>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark">
        <li>
          <a className="dropdown-item" href="#">
            Mi Perfil
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Ayuda
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Salir
          </a>
        </li>
      </ul>
    </li>
  );
}
