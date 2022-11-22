import logo from '../../img/logo.svg';
import styles from './styles.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo Burguer Kenzie" />
            <form className={styles.form}>
                <input type="text" name="search"  value={''} placeholder='Pesquisar'/>
                <button type='submit'>Pesquisar</button>
            </form>
        </header>
    )
}