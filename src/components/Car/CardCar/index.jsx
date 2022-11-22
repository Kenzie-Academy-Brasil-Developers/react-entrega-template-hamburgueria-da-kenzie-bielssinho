import styles from './styles.module.css';

export const CardCar = ({ id, image, name, category, setCartProducts }) => {
    return (
        <li className={styles.cardCar}>
            <div>
                <img src={image} alt={name} />
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <p>{category}</p>
                </div>
            </div>
            <button id={id}>Remover</button>
        </li>
    )
}