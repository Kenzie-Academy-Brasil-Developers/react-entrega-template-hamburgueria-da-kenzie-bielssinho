import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { MdLogout } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import Logo from '../../img/logo.svg';
import { StyledDiv } from './styles';


export const Dashboard = () => {
    const { items, loading } = useContext(AuthContext);

    if(loading){
        return null;
    }

    console.log(items)
    return items ? 
    <StyledDiv>
        <header>
            <img src={Logo} alt='logo Burguer Kenzie' />
            <div>
                <BiSearch className='styleSearch'/>
                <div>
                    <FaShoppingCart className='styleCart'/>
                    <span>0</span>
                </div>
                <MdLogout className='styleLogout'/>
            </div>
        </header>
        <div>
            <ul>
            {/* {
                items.map(item => 
                <li>
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.category}</p>
                    <span>{item.price}</span>
                    <button></button>    
                </li>)
            } */}
            </ul>
        </div>
    </StyledDiv> 
    : 
    <Navigate to='/'/>
}