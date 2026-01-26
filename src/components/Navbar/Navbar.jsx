import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//BrowserRouter: Container que vai envolver tudo relacionado as nossas rotas. E vai habilitar essa funcionalidade.
//Routes: Caixa que guarda todas as rotas
//Route: Define cada rota individual

//Link é usado para criar links entre as páginas, substituindo a tag <a>.

// Inicio sempre com /

import Inicio from "../Inicio/Inicio";
import Projetos from "../Projetos/Projetos";
import Contatos from "../Contatos/Contatos";

import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className={styles.navBar}>
        <ul className="{style.listaDesordenada}">
                 <li>
              <Link className={styles.linkRota} to="/">Inicio</Link>
           </li>
           <li> <Link className={styles.linkRota} to="/projetos">Projetos</Link> </li>
           <li> <Link className={styles.linkRota} to="/contatos">Contatos</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contatos" element={<Contatos />} />
        {/* rota inicio
             rota projetos
             rota contatos
            */}
      </Routes>
    </BrowserRouter>
  );
}
