import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { api } from "./services/Api";
import { GlobalStyle } from "./styles/global";
// fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    // .then((response) => response.json())
    // .then((response) => )
    // .catch((err) => console.log(err))


function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const [cartValue, setCartValue] = useState([]);

  useEffect(() => {
    async function getProducts(){
      try{
        const response = await api.get('products');

        setProducts(response.data)
      }catch(err){
        console.log(err)
      }
    }

    getProducts();
  }, []);

  return (
    <div>
      <GlobalStyle/>
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
