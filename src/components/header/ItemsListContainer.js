import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="category/termicas">
          {props.itemUno}
        </Link>
      </li>

      <li>
        <Link to="category/disyuntor">
          {props.itemDos}
        </Link>
      </li>

      <li>
        <Link to="category/contactores">
          {props.itemTres}
        </Link>
      </li>

      <li>
        <Link to="category/cables">
          {props.itemCuatro}
        </Link>
      </li>
    </ul>
  )
}

export default ItemListContainer;