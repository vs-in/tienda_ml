import React from "react";
import Brand from "./Brand";
import CartWidget from "./CartWidget";
import "./Header.css";
import ItemListContainer from "./ItemsListContainer";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>
            <nav className="containerItemList">
                <ItemListContainer
                    itemUno="Termicas"
                    itemDos="Disyuntores"
                    itemTres="Contactores"
                    itemCuatro="Conductores"
                />
            </nav>
            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;