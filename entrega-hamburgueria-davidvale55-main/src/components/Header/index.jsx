import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.modules.scss";
import Button from "../Button/Button";

export const Header = ({ cartList, setRender, setSearch }) => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
    setValue("");
  };

  const openModal = (e) => {
    e.preventDefault();
    setRender(true);
  };

  return (
    <header className="header-container">
      <img src={Logo} alt="Logo Kenzie Burguer" />
      <form onSubmit={submit}>
        <span>
          <Button onClick={openModal}>
            <MdShoppingCart size={25} />
          </Button>
          <p className="quantity">{cartList.length}</p>
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">
          <MdSearch size={21} />
        </Button>
      </form>
    </header>
  );
};
