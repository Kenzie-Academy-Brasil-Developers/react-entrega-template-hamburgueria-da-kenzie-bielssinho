import { Car } from '../Car';
import { List } from '../List';
import styles from './styles.module.css';

export const Section = ({ products, search, setSearch, searchProducts, cartProducts, setCartProducts, cartValue, setCartValue }) => {
    const eventClear = (e) => {
        e.preventDefault()

        setSearch('')
    }

    if(!searchProducts.length){
        return (
            <section>
                <List products={products} setCartProducts={setCartProducts} />
                <Car 
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    cartValue={cartValue}
                    setCartValue={setCartValue}
                />
            </section>
        )
    }else{
        return(
            <section>
                <div className={styles.filter}>
                    <h3>Resultados para: <span>{search}</span></h3>
                    <button onClick={eventClear}  type='submit'>Limpar Busca</button>
                </div>
                <List products={searchProducts} setCartProducts={setCartProducts} />
                <Car 
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                    cartValue={cartValue}
                    setCartValue={setCartValue}
                />
            </section>
        )
    }
}