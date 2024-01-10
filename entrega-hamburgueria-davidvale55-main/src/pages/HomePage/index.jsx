import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../axios/api.js";
import { useEffect } from "react";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [render, setRender] = useState(false)
   const [search, setSearch] = useState("")

   const searchProducts = productList.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
   const products = search ? searchProducts : productList

   
   useEffect(() => {
      const getProducts = async () => {
         const response = await api.get("/products")
         setProductList(response.data)
      }
      getProducts()
   }, [])
   
   return (
      <>
         <Header cartList={cartList} setSearch={setSearch} setRender={setRender} />
         <main>
            <CartModal cartList={cartList} setCartList={setCartList} render={render} setRender={setRender}/>
            <ProductList products={products} cartList={cartList} setCartList={setCartList}/>
         </main>
      </>
   );
};
