import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import maiscurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisvistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreendame from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './menu.module.scss'


export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="">Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maiscurtidas} alt="" />
                <a href="">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={maisvistas} alt="" />
                <a href="">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreendame}alt="" />
                <a href="">Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
