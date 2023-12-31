import React from 'react'
import styles from './tags.module.scss'
import fotos from '../galeria/fotos.json'

export default function Tags({tags,filtrarfotos,setItens}) {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag)  => {
          return (
          <li key={tag} onClick={() =>filtrarfotos(tag)}>{tag}</li>
        )
        })}
        <li onClick={()=> setItens(fotos)}>Todas</li>
      </ul>
    </div>
  )
}