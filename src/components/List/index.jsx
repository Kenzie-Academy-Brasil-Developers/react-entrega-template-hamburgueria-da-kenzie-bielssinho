import styles from './styles.module.css';
import { Card } from './Card';

export const List = ({ products, setCartProducts, cartProducts }) => {
    return (
        <ul className={styles.ul}>
            {
                products.map((product, index) => <Card key={index} cartProducts={cartProducts} products={products} name={product.name} category={product.category} price={product.price} image={product.img} id={product.id} setCartProducts={setCartProducts} />)
            }
        </ul>
    )
}