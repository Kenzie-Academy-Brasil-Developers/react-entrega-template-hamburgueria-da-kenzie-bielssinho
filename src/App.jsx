import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section";



function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((response) => setProducts(response))
    .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <Header
        search={search} 
        setSearch={setSearch}
        products={products}
        setSearchProducts={setSearchProducts}
      />
      <Section 
        products={products} 
        search={search}
        setSearch={setSearch}
        searchProducts={searchProducts}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        cartValue={cartValue}
        setcartValue={setCartValue} 
      />
    </div>
  );
}

export default App;
