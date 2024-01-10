import { ProductCard } from "./ProductCard";
import styles from "./style.modules.scss"

export const ProductList = ({ cartList, setCartList, products }) => {

   return (
      <div className="container">
         <ul>
            {products.map((product) => (
               <ProductCard key={product.id} cartList={cartList} setCartList={setCartList} product={product} />
            ))}
         </ul>
      </div>
   );
};
