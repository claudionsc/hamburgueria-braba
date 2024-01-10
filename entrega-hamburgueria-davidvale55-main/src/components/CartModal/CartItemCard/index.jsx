import { MdDelete } from "react-icons/md";
import Button from "../../Button/Button";

export const CartItemCard = ({ product, cartList, setCartList}) => {

   const handleDelete = (itemId) => {
      const cartFiltered = cartList.filter((item) => item.id != itemId)
      setCartList(cartFiltered)
   }

   return (
      <li>
            <img src={product.img} alt={product.name} />
         <div>
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
         </div>
         <Button aria-label="delete" title="Remover item" onClick={() => handleDelete(product.id)}>
            <MdDelete size={21} />
         </Button>
      </li>
   );
};
