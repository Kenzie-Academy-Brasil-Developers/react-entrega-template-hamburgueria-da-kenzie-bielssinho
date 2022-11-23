export const Card = ({ products, name, category, price, image, id, setCartProducts, cartProducts }) => {
    const eventAddCar = (e) => {
        e.preventDefault();

        const prod = products.find(product => product.id == id);
        
        const verify = cartProducts.find(product => product.id == prod.id);

        if(!verify){
            setCartProducts([...cartProducts, prod]);
        }
    }


    return (
        <li>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{category}</p>
                <span>R$ {price}</span>
                <button onClick={eventAddCar} id={id} type="submit">Adicionar</button>
            </div>
        </li>
    )
}