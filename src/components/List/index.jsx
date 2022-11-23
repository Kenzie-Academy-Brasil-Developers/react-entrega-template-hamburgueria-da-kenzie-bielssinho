import { Card } from './Card';
import { StyledListCard } from '../../styles/card';

export const List = ({ products, setCartProducts, cartProducts }) => {
    return (
        <StyledListCard>
            {
                products.map((product, index) => <Card key={index} cartProducts={cartProducts} products={products} name={product.name} category={product.category} price={product.price} image={product.img} id={product.id} setCartProducts={setCartProducts} />)
            }
        </StyledListCard>
    )
}