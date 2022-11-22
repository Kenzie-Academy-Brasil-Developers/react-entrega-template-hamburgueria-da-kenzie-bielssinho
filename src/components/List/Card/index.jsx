export const Card = ({ name, category, price, image }) => {
    return (
        <li>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{category}</p>
                <span>R$ {price}</span>
                <button type="submit">Adicionar</button>
            </div>
        </li>
    )
}