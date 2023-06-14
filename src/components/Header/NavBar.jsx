import "./NavBar.css";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // NavLink,
  // Routes,
} from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/">
            Inicio
          </Link>
        </li>        
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/Animales">
            Animales
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/Colores">
            Colores
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/Numeros">
            Números
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/Cuerpo">
            Partes del Cuerpo
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" animate-text nav-link active" to="/Login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
