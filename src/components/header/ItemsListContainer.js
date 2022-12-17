import React from 'react'


const ItemsListContainer = (props) => {
  return (
    <ul>
        <li>{props.itemUno}</li>
        <li>{props.itemDos}</li>
        <li>{props.itemTres}</li>
        <li>{props.itemCuatro}</li>
    </ul>
  )
}

export default ItemsListContainer;