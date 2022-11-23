import { StyledDivContent, StyledDivVazio } from '../../styles/car';
import { CardCar } from './CardCar';


export const  Car = ({ cartProducts, setCartProducts, cartValue, setCartValue }) => {
    const listValue = cartProducts.map(product => product.price)
            
    const value = listValue.reduce((total, currentValue) => { return total + currentValue}, 0)
    
    if(!cartProducts.length){
        return (
            <StyledDivVazio>
                <h4>Carrinho de compras</h4>
                <p>Carrinho Vazio</p>
            </StyledDivVazio>
        )
    }else{
        return (
            <StyledDivContent>
                <div className='carContent'>
                    <h4>Carrinho de compras</h4>
                    <ul>
                        {
                            cartProducts.map((product, index) => 
                            <CardCar 
                                key={index} 
                                id={product.id} 
                                image={product.img}
                                name={product.name}
                                category={product.category}
                                setCartProducts={setCartProducts}
                                cartProducts={cartProducts}
                            />)
                        }
                    </ul>
                </div>
                <div className='value'>
                    <div>
                        <h4>Total</h4>
                        <span>R$ {value}</span>
                    </div>
                    <button onClick={() => setCartProducts([])}>Remover Todos</button>
                </div>
            </StyledDivContent>
        )
    }
}