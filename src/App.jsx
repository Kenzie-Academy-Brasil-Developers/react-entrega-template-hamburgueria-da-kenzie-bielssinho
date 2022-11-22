import { useEffect, useState } from "react";
import { Header } from "./components/Header";



function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((response) => setProducts(response))
    .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <Header setSearch={setSearch}/>
      
    </div>
  );
}

export default App;
