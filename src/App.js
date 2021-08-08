import React from "react";
import "./index.css";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop"; 
import Footer from "./Footer";
import {useState, useEffect } from "react";

function App() {

  const [cartItems, setCartItems] = useState ([]);
  const [cartCount, setCartCount] = useState (0);
  const [total, setTotal] = useState (0);

  const addToCart = (product) => {
    setCartItems ([...cartItems, product]);
    addCartCount ();
  }

  const subtractProductFromShoppingCart = (productName) => {
    //findAndSubtractProduct(productName);
    subtractCartCount ();
  }
  
  const subtractCartCount = () => {
    setCartCount ( cartCount - 1);
    console.log(cartCount);
  }

  const addCartCount = () => {
    setCartCount ( cartCount + 1);
  }

  const decreaseCartCount = () => {
    setCartCount ( cartCount - 1) ;
    return true;
  }

  const displayCart = () => {
    
  }

  return (
    <BrowserRouter>
    <div id="mainpage">
      <Nav count={cartCount} />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/Cart" render={(props) => < Cart {...props} add={addToCart} />} />
        <Route exact path="/Shop" render={(props) => <Shop {...props} add={addToCart} />} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;