import { StyledDivContent, StyledDivVazio } from './cart';
import { CardCar } from './CardCart';


export const  Car = ({ cartProducts, setCartProducts }) => {
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
                                product={product}
                                setCartProducts={setCartProducts}
                                cartProducts={cartProducts}
                            />)
                        }
                    </ul>
                </div>
                <div className='value'>
                    <div>
                        <h4>Total</h4>
                        <span>R$ {value.toFixed([2])}</span>
                    </div>
                    <button onClick={() => setCartProducts([])}>Remover Todos</button>
                </div>
            </StyledDivContent>
        )
    }
}