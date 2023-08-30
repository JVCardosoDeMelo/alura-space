import React from 'react'
import styles from './populares.module.scss';
import fotospopulares from './fotos-populares.json'
import Botao from 'componentes/botao';

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
        <ul className={styles.populares__imagens}>
         {fotospopulares.map ((fotoPopular) => {
            return(
                <li key={fotoPopular.id}>
                    <img src={fotoPopular.path} alt={fotoPopular.alt} />
                </li>
            )
         })}
        </ul>
        <Botao>Ver mais fotos</Botao>
        </aside>
  )
}
