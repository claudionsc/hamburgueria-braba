import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import Button from "../Button/Button";
import styles from "./style.modules.scss";

export const CartModal = ({ cartList, setCartList, render, setRender }) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
  }, 0);

  const deleteAll = () => {
    setCartList([]);
  };

  const closeModal = () => {
    setRender(false);
  };

  if (!render) {
    return null;
  }

  return (
    <main className="modal-container">
      <article role="dialog" className="modal">
        <section className="modal-header">
          <h2>Carrinho de compras</h2>
          <Button
            aria-label="close"
            title="Fechar"
            className="modal-close"
            onClick={closeModal}
          >
            <MdClose size={21} />
          </Button>
        </section>
        <section>
          <ul>
            {cartList.map((product) => (
              <CartItemCard
                key={product.id}
                product={product}
                cartList={cartList}
                setCartList={setCartList}
              />
            ))}
          </ul>
        </section>
        <section>
          <span className="modal-footer">
            <div>
              <h3>Total </h3>
              <p>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            {cartList.length !== 0 && (
              <Button onClick={deleteAll} className="remove-all">
                Remover todos
              </Button>
            )}
          </span>
        </section>
      </article>
    </main>
  );
};
