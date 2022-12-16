import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


export const Card = ( { item, id, cart, setCart }: any) => {
    const { items } = useContext(AuthContext);

    const eventAddCar = (e: any) => {
        e.preventDefault();

        const prod: any= items.find(productCurrent => productCurrent.id == id);
        
        prod.counter = 1

        const verify = cart.find((product: any) => product.id === prod.id);
        console.log(cart)
        if(!verify){
            setCart([...cart, prod]);
        }else{
            prod.counter += 1;
        }
    }
    return(
        <li key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <span>R$ {item.price}</span>
            <button onClick={eventAddCar} id={item.id}>Adicionar</button>    
        </li>
    )
}