export const Card = ({ products, product, id, setCartProducts, cartProducts }) => {
    const eventAddCar = (e) => {
        e.preventDefault();

        const prod = products.find(productCurrent => productCurrent.id == id);
        
        const verify = cartProducts.find(product => product.id == prod.id);

        if(!verify){
            setCartProducts([...cartProducts, prod]);
        }
    }

    return (
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <span>R$ {product.price}</span>
                <button onClick={eventAddCar} id={id} type="submit">Adicionar</button>
            </div>
        </li>
    )
}