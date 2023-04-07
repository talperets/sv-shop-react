import React from "react";
import "../App.css";
export default function Cart(props) {
  return (
    <div className="cart">
      <h3>{props.name}</h3>
      <hr />
      <h3>{props.price}$</h3>
    </div>
  );
}
