import { useState } from "react";
import PetAdopt from "../../assets/pet.png";
import ReciclaTech from "../../assets/recicla.png";
import VerdeAcao from "../../assets/verde.png";

import styles from "./Projetos.module.scss";

function Projetos() {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: PetAdopt,
      nome: "PetAdopt",
      descricao: "Projeto criado para adoção de pets.",
      link: "",
    },
    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Projeto focado para facilitar doações de eletrônicos",
      link: "",
    },
    {
      id: 3,
      imagem: VerdeAcao,
      nome: "Verde Ação",
      descricao: "Projeto que conecta interessados em ações voluntárias",
      link: "",
    },
    {
      id: 4,
      imagem: "",
      nome: "",
      descricao: "",
      link,
    }
  ]);

  return (
    <section className={styles.sectionProjetos}>
      <div>✦ criações ✦</div>
      <h2>
        Meu <em>Portfólio</em>
      </h2>
      {projetos.map((item) => (
        <article className={styles.cardProjetos} key={item.id}>
          <img src={item.imagem} alt={item.descricao} />
          <h2>{item.nome}</h2>
          <p> {item.descricao} </p>
          <button>{item.link}</button>
        </article>
      ))}
    </section>
  );
}

export default Projetos;
