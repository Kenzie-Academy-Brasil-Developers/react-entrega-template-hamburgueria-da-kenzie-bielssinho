import { CardCar } from './CardCar';
import styles from './styles.module.css';

export const  Car = ({ cartProducts, setCartProducts, cartValue, setCartValue }) => {
    const listValue = cartProducts.map(product => product.price)
            
    const value = listValue.reduce((total, currentValue) => { return total + currentValue}, 0)
    
    if(!cartProducts.length){
        return (
            <div className={styles.car}>
                <h4>Carrinho de compras</h4>
                <p>Carrinho Vazio</p>
            </div>
        )
    }else{
        return (
            <div className={styles.div}>
                <div className={styles.carContent}>
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
                <div className={styles.value}>
                    <div>
                        <h4>Total</h4>
                        <span>R$ {value}</span>
                    </div>
                    <button onClick={() => setCartProducts([])}>Remover Todos</button>
                </div>
            </div>
        )
    }
}