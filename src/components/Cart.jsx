import React from "react";
import "../App.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Button } from "@mui/material";
export default function Cart(props) {
  return (
    <div className="cart">
      <h3>{props.name}</h3>
      <hr />
      <h3>{props.price}$</h3>
      <Button onClick={() => props.removeProduct(props.index)}>
        <RemoveShoppingCartIcon />
      </Button>
    </div>
  );
}
