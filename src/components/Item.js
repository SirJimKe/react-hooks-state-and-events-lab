import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);

  function handleCart() {
    setAddToCart((addToCart) => !addToCart)
  }

  const cartClass = addToCart ? "in-cart" : "";
  const btnColor = addToCart ? "remove" : "add";

  return (
    <li className= {cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className={btnColor} >{addToCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
