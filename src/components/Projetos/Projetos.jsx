import { useState } from "react";
//importanto o hook useState que nos permite guardar e controlar dados
import PetAdopt from "../../assets/pet.png";
import ReciclaTech from "../../assets/recicla.png";
import VerdeAcao from "../../assets/verde.png";

//Para importar o estilo:
import styles from "./Projetos.module.scss";

function Projetos() {
  //  const [valorAtual, funçãoQueMuda] = useState(valorInicial)

  const [projetos, setProjetos] = useState([
    {
      //chave:valor,
      id: 1,
      imagem: PetAdopt,
      nome: "PetAdopt",
      descricao: "Projeto criado para adoção de pets.",
    },
    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao:
        "Projeto focado para facilitar a doação de aparelho eletronicos.",
    },
    {
      id: 3,
      imagem: VerdeAcao,
      nome: "Verde Ação",
      descricao: "Projeto que conecta interessados em projetos ambientais",
    },
  ]);
  return (
    <section className="{styles.sectionProjetos}">
      {projetos.map((item) => (
        <article className="{style.cardProjetos}" key={item.id}>
          <img src={item.imagem} alt="" />
          <h2>{item.nome}</h2>
          <p>{item.descricao}</p>
        </article>
      ))}
    </section>
  );
}
export default Projetos;
