import { toast } from 'react-toastify';
import logo from '../../img/logo.svg';
import { StyledHeader } from './header';

export const Header = ({ search, setSearch, products, setSearchProducts }) => {
    const eventSearch = (e) =>{
        e.preventDefault();

       
        const itemFilter = search.toLowerCase();
        const listProduct = products.filter(product => product.category.toLowerCase().includes(itemFilter) || product.name.toLowerCase().includes(itemFilter));
        
        search.length === 0? setSearchProducts('') :
        setSearchProducts(listProduct);
       
    };

    return (
        <StyledHeader>
            <img src={logo} alt='logo Burguer Kenzie' />
            <form className='form' onClick={eventSearch}>
                <input type='text' name='search' onChange={e => setSearch(e.target.value)} value={search} placeholder='Pesquisar'/>
                <button type='submit'>Pesquisar</button>
            </form>
        </StyledHeader>
    )
}