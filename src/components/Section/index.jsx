import { StyledSection } from './section';
import { Car } from '../Cart';
import { List } from '../List';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Section = ({ products, search, setSearch, searchProducts, cartProducts, setCartProducts, cartValue, setCartValue }) => {
    const eventClear = (e) => {
        e.preventDefault()

        setSearch('')
    }

    if(!searchProducts.length){
        return (
            <StyledSection>
                <List cartProducts={cartProducts} products={products} setCartProducts={setCartProducts} />
                <Car 
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    cartValue={cartValue}
                    setCartValue={setCartValue}
                />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </StyledSection>
        )
    }else{
        return(
            <StyledSection>
                <div className='divFilter'>
                    <div className='filter'>
                        <h3>Resultados para: <span>{search}</span></h3>
                        <button onClick={eventClear}  type='submit'>Limpar Busca</button>
                    </div>
                    <List cartProducts={cartProducts} products={searchProducts} setCartProducts={setCartProducts} />
                </div>
                <Car 
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    cartValue={cartValue}
                    setCartValue={setCartValue}
                />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </StyledSection>
        )
    }
}