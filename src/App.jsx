import "./App.css";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import { useState } from "react";

function App() {
  const [selectedProducts, setProduct] = useState([]);
  let purchased = [];
  const [showProductContainer, setShowProductContainer] = useState(true);
  const [showCartContainer, setShowCartContainer] = useState(false);

  const productArr = [
    { name: "Beer", price: 2.49 },
    { name: "Beef", price: 6.99 },
    { name: "Alco", price: 3.49 },
    { name: "Rice", price: 1.99 },
  ];

  const addProduct = (i) => {
    let item = productArr.filter((val, index) => index === i);
    setProduct([...selectedProducts, ...item]);
  };

  const getTotalPrice = () => {
    return selectedProducts.reduce((total, item) => total + item.price, 0);
  };

  const total = getTotalPrice();

  const showProduct = () => {
    setShowProductContainer(true);
    setShowCartContainer(false);
  };

  const showCart = () => {
    setShowProductContainer(false);
    setShowCartContainer(true);
  };
  const buyProducts = () => {
    purchased = [...selectedProducts];
    setProduct([]);
    showProduct();
  };

  return (
    <div className="App">
      <header>
        <Button onClick={showProduct}>
          <HomeIcon />
        </Button>

        <h1>SV-Shop</h1>

        <Button onClick={showCart}>
          <ShoppingCartIcon />
        </Button>
      </header>

      <div
        className="product-container"
        style={{ display: showProductContainer ? "flex" : "none" }}
      >
        {productArr.map((val, index) => {
          return (
            <Product
              name={val.name}
              price={val.price}
              index={index}
              addProduct={addProduct}
            />
          );
        })}
      </div>

      <div
        className="cart-container"
        style={{ display: showCartContainer ? "flex" : "none" }}
      >
        <h2>Cart</h2>
        {selectedProducts.map((val, index) => {
          return <Cart name={val.name} price={val.price} />;
        })}
        <h1>Total: {Math.round(total)}$</h1>
        <Button variant="contained" onClick={buyProducts}>
          Buy
        </Button>
      </div>
    </div>
  );
}

export default App;
