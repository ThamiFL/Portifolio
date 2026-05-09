import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../Inicio/Inicio";
import Projetos from "../Projetos/Projetos";
import Contatos from "../Contatos/Contatos";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <BrowserRouter>  
      <nav className={styles.navBar}>
      <h1>Fios <em>&</em> Códigos</h1>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link className={styles.contatos} to="/contatos">Contatos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
}
