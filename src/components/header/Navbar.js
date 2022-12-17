import React from "react";
import Brand from "./Brand";
import ItemsListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import "./Header.css";

const Navbar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>
      <nav className="containerItemList">
      <ItemsListContainer
         itemUno = "Termicas"
         itemDos = "Disyuntores"
         itemTres = "Contactores"
         itemCuatro = "Cables"
      />
      </nav>
      <div className="containerCart">
        <CartWidget/>
      </div>
    </header>
  );
};

export default Navbar;
