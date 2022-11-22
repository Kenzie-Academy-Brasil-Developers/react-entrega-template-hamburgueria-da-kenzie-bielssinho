import styles from './styles.module.css';

export const  Car = ({ cartProducts, setCartProducts, cartValue, setCartValue }) => {
    if(!cartProducts.length){
        return (
            <div className={styles.car}>
                <h4>Carrinho de compras</h4>
                <p>Carrinho Vazio</p>
            </div>
        )
    }
}