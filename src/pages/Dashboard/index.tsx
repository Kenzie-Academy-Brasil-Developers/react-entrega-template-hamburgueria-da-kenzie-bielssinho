import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { MdLogout } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import Logo from '../../img/logo.svg';
import { StyledDiv, StyledList } from './styles';
import { Card } from '../../components/Card/Card';
import { iProducts } from '../../context/AuthContext';
import { ModalCart } from '../../components/Cart/Cart';
import { useNavigate } from 'react-router-dom';
import { DashContext } from '../../context/DashContext';


export const Dashboard = () => {
    const { items, loading, loadUser } = useContext(AuthContext);
    const { setSearch, setCart, cart, setModal, modal, openSearchBtn, closeSearchBtn, eventSearch, logout, openSearch, search, searchProducts } = useContext(DashContext);
    // const [ openSearch, setOpenSearch ] = useState(false);
    // const [ search, setSearch ] = useState('');
    // const [ searchProducts, setSearchProducts] = useState<iProducts[]>([]);
    // const [ cart, setCart ] = useState<iProducts[]>([]);
    // const [ modal, setModal ] = useState(false);

    // const navigate = useNavigate();

    useEffect(() => {
        loadUser()
    }, []);

    if(loading){
        return null;
    }

    // const openSearchBtn = () => {
    //     if(!openSearch){
    //         setOpenSearch(true)
    //     }
    // }

    // const closeSearchBtn = () => {
    //     if(openSearch){
    //         setOpenSearch(false)
    //     }
    // }

    // const eventSearch = (e: any) =>{
    //     e.preventDefault();

       
    //     const itemFilter = search.toLowerCase();
    //     const listProduct: iProducts[] = items.filter(product => product.category.toLowerCase().includes(itemFilter) || product.name.toLowerCase().includes(itemFilter));
    //     console.log(listProduct)
    //     searchProducts.length ? setSearchProducts([]) :
    //     setSearchProducts(listProduct);
       
    // };

    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/')
    // }


    return(
    <StyledDiv>
        <header>
            <div>
                <img src={Logo} alt='logo Burguer Kenzie' />
                <div className='options'>
                    <BiSearch onClick={() => { openSearch ? closeSearchBtn() : openSearchBtn()}} className='styleSearch'/>
                    <div>
                        <FaShoppingCart onClick={() => setModal(true)} className='styleCart'/>
                        <span>{cart.length}</span>
                    </div>
                    <MdLogout onClick={logout} className='styleLogout'/>
                </div>
            </div>
            {
                openSearch &&
                <form onSubmit={eventSearch} className='search'>
                    <input type="text" onChange={e => setSearch(e.target.value)}/>
                    <BiSearch type='submit' className='searchBtn'/>
                </form>
            }
        </header>
        <StyledList>
            <ul>
            {
                search !== '' ? 
                searchProducts.map((item) => <Card key={item.id} item={item} /> ) 
                : 
                items.map((item) => <Card key={item.id} item={item} id={item.id} cart={cart} setCart={setCart} /> )
            }
            </ul>
        </StyledList>
        {
            modal && <ModalCart cart={cart} setModal={setModal} setCart={setCart} />
        }
    </StyledDiv> 
    )
}