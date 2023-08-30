import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'



export default function Cabecalho() {
    return (
        <header className={styles.Cabecalho}>
            <img src={logo} alt="logo do alura space"/>
            <div className={styles.Cabecalho__container}>
                <input className={styles.Cabecalho__input} type="text"
                placeholder="O que vc procura?" />
                <img src={search} alt="icone de lupa"/>
            </div>

            
        </header>
    )
}