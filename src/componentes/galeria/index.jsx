import React from "react";
import Tags from "../tags";
import styles from "./galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./cards";


export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards itens ={fotos} styles={styles}/>
    </section>
  );
}