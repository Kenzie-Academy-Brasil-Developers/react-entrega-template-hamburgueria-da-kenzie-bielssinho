import logo from '../../img/logo.svg';
import { StyledHeader } from '../../styles/header';

export const Header = ({ search, setSearch, products, setSearchProducts }) => {
    const eventSearch = (e) =>{
        e.preventDefault();

        if(search != ''){
            const listProduct = products.filter(product => product.category == search || product.name == search);
            setSearchProducts(listProduct);
        }
    };

    return (
        <StyledHeader>
            <img src={logo} alt="logo Burguer Kenzie" />
            <form className='form' onSubmit={eventSearch}>
                <input type="text" name="search" onChange={e => setSearch(e.target.value)} value={search} placeholder='Pesquisar'/>
                <button type='submit'>Pesquisar</button>
            </form>
        </StyledHeader>
    )
}