import styles from './styles.module.css';

export const CardCar = ({ id, image, name, category, cartProducts, setCartProducts }) => {
    const eventRemove = () => {
        const newCart = cartProducts.filter(product => product.id != id);

        setCartProducts(newCart)
    }


    return (
        <li className={styles.cardCar}>
            <div>
                <img src={image} alt={name} />
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <p>{category}</p>
                </div>
            </div>
            <button id={id} onClick={eventRemove}>Remover</button>
        </li>
    )
}