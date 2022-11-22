import styles from './styles.module.css';
import { Card } from './Card';

export const List = ({ products, setCartProducts }) => {
    return (
        <ul className={styles.ul}>
            {
                products.map((product, index) => <Card key={index} name={product.name} category={product.category} price={product.price} image={product.img} setCartProducts={setCartProducts} />)
            }
        </ul>
    )
}