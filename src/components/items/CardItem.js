import React from "react";
import Image from "./Image";
import "./cardItem.css";
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = () => {
  return <div className="cardItem">
    <Image/>
    <Description/>
    <div className="buttons">
        <ButtonDetalles/>
        <ButtonAddCart/>
    </div>
  </div>
};

export default CardItem;
