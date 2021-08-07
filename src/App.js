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
  const [score, setScore] = useState (0);

  // cart Item { name: "reddaruma" quantity: " " cost: "" }
  useEffect (() => {
  });

  const addToCart = (selection) =>{
    //search to see if item has already been added..> if it has just update quantity
    let newCartItem = { name: selection, quantity: 1, };
    let newCartList = cartItems;
    setCartItems ( );
    increaseCartCount();
  }

  const increaseCartCount = () => {
    setCartCount ( cartCount + 1);
  }

  const decreaseCartCount = () => {
    setCartCount ( cartCount - 1) ;
    return true;
  }

  return (
    <BrowserRouter>
    <div id="mainpage">
      <Nav />
      <Switch>
        <Route exact path ="/" component={Home}  add={increaseCartCount}/>
        <Route exact path="/Cart" component={Cart}  add={increaseCartCount}/>
        <Route exact path="/Shop" component={Shop}  add={increaseCartCount}/>
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;