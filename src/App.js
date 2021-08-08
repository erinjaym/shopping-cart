import React from "react";
import "./index.css";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop"; 
import Footer from "./Footer";
import {useState, useEffect } from "react";
import productList from "./CurrentProducts";

function App() {

  const [cartItems, setCartItems] = useState (productList);
  const [cartCount, setCartCount] = useState (0);
  const [total, setTotal] = useState (0);
  const [] = useState ();

  // copy product list to cart items but only show items with a quantity more than one? 

 const findAndAddProduct = (productName) => {
  for (let location= 0;  location < cartItems.length; location++){ 
    console.log(cartItems[location].quantity);
  if ((cartItems[location].name) === productName)
   {
     let newQuantity = (cartItems[location].quantity + 1); 
     console.log(newQuantity);
     console.log(cartItems[location].quantity);
    return setCartItems (cartItems[location].quantity = newQuantity ); //isues with this? bad form //causing prog to crash also 
   }else {
     console.log("no such product in cart");
   }
  }
 }
/*
 const findAndSubtractProduct = (productName) => {
  for (let location= 0;  location < cartItems.length; location++){ 
  if ((cartItems[location].name) === productName)
   {
     if (cartItems[location].quantity > 0){
    return setCartItems (cartItems[location].quantity: cartItems[location].quantity - 1 );
     }else{
      return console.log("quantity is already at zero");
     }
   }else {
     console.log("no such product in cart";
   }
  }
 } */

  const addToCart = (selection) =>{
    let newCartItem = { name: " ", quantity: 1, cost: " ",  };
    let newCartList = cartItems;
    setCartItems ( );
    //increaseCartCount();
  }

  const addProductToShoppingCart = (productName) => {
    findAndAddProduct (productName);
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

  return (
    <BrowserRouter>
    <div id="mainpage">
      <Nav add={addCartCount}/>
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Shop" render={(props) => <Shop {...props} add={addProductToShoppingCart} />} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;