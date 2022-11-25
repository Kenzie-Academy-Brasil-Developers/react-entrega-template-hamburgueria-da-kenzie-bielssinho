import { Card } from './Cardp';
import { StyledListCard } from './card';

export const List = ({ products, setCartProducts, cartProducts }) => {
    return (
        <StyledListCard>
            {
                products.map((product, index) => <Card key={index} cartProducts={cartProducts} product={product} products={products} id={product.id} setCartProducts={setCartProducts} />)
            }
        </StyledListCard>
    )
}