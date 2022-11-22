import logo from '../../img/logo.svg';
import styles from './styles.module.css';

export const Header = ({ search, setSearch, products, setSearchProducts }) => {
    const eventSearch = (e) =>{
        e.preventDefault();

        if(search != ''){
            const listProduct = products.filter(product => product.category == search || product.name == search);
            setSearchProducts(listProduct);
        }
    };

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo Burguer Kenzie" />
            <form className={styles.form} onSubmit={eventSearch}>
                <input type="text" name="search" onChange={e => setSearch(e.target.value)} value={search} placeholder='Pesquisar'/>
                <button type='submit'>Pesquisar</button>
            </form>
        </header>
    )
}