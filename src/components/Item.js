import React from "react";
import { useState } from "react";


function Item({ name, category }) {
  const [isCart, setIsCart] = useState(false);
  function handleClick() {
    setIsCart(!isCart);
    // update the state variable 'isCart' to toggle between true and false
  }
  const inCart = isCart ? "in-cart" : "";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
