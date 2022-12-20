import React from "react";
import Image from "../Image";
import "./cardItem.css";
import Description from "../Description";
import ButtonDetalles from "../Buttondetalles";
import ButtonAddCart from "../ButtonAddCart";
import ImgPrueba from "../../img/20221103_190546.jpg";
const CardItem = (props) => {
  return <div className="cardItem">
    <Image
      imagen={ImgPrueba}
    />
    <Description 
      title="Termomagnetica Bipolar ABB Tubio"
      cantidad ={5}
      precio ={20000}
    
    />
    <div className="buttons">
        <ButtonDetalles/>
        <ButtonAddCart/>
    </div>
  </div>
};

export default CardItem;
