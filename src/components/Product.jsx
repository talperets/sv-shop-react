import React from "react";
import "../App.css";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export default function Product(props) {
  return (
    <div className="product">
      <h3>{props.name}</h3>
      <hr />
      <h3>{props.price}$</h3>
      <hr />
      <Button onClick={() => props.addProduct(props.index)}>
        <AddShoppingCartIcon />
      </Button>
    </div>
  );
}
