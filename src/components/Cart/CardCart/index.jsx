import { StyledCarCard } from './cartCard';


export const CardCar = ({ id, product, cartProducts, setCartProducts }) => {
    const eventRemove = () => {
        const newCart = cartProducts.filter(produc => produc.id != product.id);

        setCartProducts(newCart)
    }


    return (
        <StyledCarCard>
            <div>
                <img src={product.img} alt={product.name} />
                <div className='info'>
                    <h3>{product.name}</h3>
                    <p>{product.category}</p>
                </div>
            </div>
            <button id={id} onClick={eventRemove}>Remover</button>
        </StyledCarCard>
    )
}