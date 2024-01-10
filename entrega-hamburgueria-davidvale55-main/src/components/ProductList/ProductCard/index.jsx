import { useEffect, useState } from "react";
import Button from "../../Button/Button";

export const ProductCard = ({ product, cartList, setCartList }) => {
  const [count, setCount] = useState(0);

  const handleCart = () => {
    const filterProduct = cartList.filter(
      (element) => product.id === element.id
    );
    if (filterProduct.length == 0) {
      setCartList([...cartList, product]);
    } else {
      alert("Não adicione o mesmo item duas vezes");
    }
  };

  useEffect(() => {
    const local = () => {
      if (count == 0) {
        setCount(1);
        if (!localStorage.getItem("@cartList")) {
          return null;
        }
        if (JSON.parse(localStorage.getItem("@cartList")).length > 0) {
          setCartList(JSON.parse(localStorage.getItem("@cartList")));
        }
      }

      if (cartList.length >= 0) {
        localStorage.setItem("@cartList", JSON.stringify(cartList));
      }
    };
    local();
  }, [cartList]);

  return (
    <li>
      <span>
        <img src={product.img} alt={product.name} />
      </span>
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p className="price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Button onClick={handleCart}>Adicionar</Button>
      </div>
    </li>
  );
};
