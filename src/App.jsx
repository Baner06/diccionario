
import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  // NavLink,
  Routes,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Main from "./components/Main/Main"
import Animal from "./components/Body/Animal";
import Body from "./components/Body/Body";
import Color from "./components/Body/Color";
import Number from "./components/Body/Number";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* Cada una de las rutas a cada Vista del Programa */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/Animales" element={<Animal />}></Route>
        <Route path="/Colores" element={<Color />}></Route>
        <Route path="/Numeros" element={<Number />}></Route>
        <Route path="/Cuerpo" element={<Body />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}




