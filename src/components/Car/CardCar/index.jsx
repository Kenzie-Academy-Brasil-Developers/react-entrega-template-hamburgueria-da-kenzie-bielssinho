import { StyledCarCard } from '../../../styles/carCard';


export const CardCar = ({ id, image, name, category, cartProducts, setCartProducts }) => {
    const eventRemove = () => {
        const newCart = cartProducts.filter(product => product.id != id);

        setCartProducts(newCart)
    }


    return (
        <StyledCarCard>
            <div>
                <img src={image} alt={name} />
                <div className='info'>
                    <h3>{name}</h3>
                    <p>{category}</p>
                </div>
            </div>
            <button id={id} onClick={eventRemove}>Remover</button>
        </StyledCarCard>
    )
}