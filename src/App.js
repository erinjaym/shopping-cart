import React from "react";
import "./index.css";
import Nav from "./Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Shop from "./Shop"; 
import Footer from "./Footer";
import {useState } from "react";
import productList from "./CurrentProducts";

function App() {

  const [cartItems, setCartItems] = useState ( productList() );
  const [cartCount, setCartCount] = useState (0);
  const [total, setTotal] = useState (0);

  const addToCart = (productName) => {
    findItemAndAddQuantity(productName);
    addCartCount ();
  };

  function findItemAndAddQuantity (productName) {
      for (let x = 0; x < cartItems.length; x++ ){
        if(cartItems[x].name === productName){
          let itemReplacement = cartItems[x];
          itemReplacement.quantity = itemReplacement.quantity + 1;
          cartItems[x] = itemReplacement;
         setCartItems( cartItems );
         console.log(cartItems);
        }else {
        }
    }
  }

  function findItemAndSubtractQuantity (productName) {
    for (let x = 0; x < cartItems.length; x++ ){
      if(cartItems[x].name === productName){
        let itemReplacement = cartItems[x];
        itemReplacement.quantity = itemReplacement.quantity - 1;
        cartItems[x] = itemReplacement;
       setCartItems( cartItems );
       console.log(cartItems);
      }else {
      }
  }
}

  const subtractFromCart = (productName) => {
    findItemAndSubtractQuantity(productName);
    subtractCartCount ();
  }
  
  const subtractCartCount = () => {
    setCartCount ( cartCount - 1);
  }

  const addCartCount = () => {
    setCartCount ( cartCount + 1);
  }

  const decreaseCartCount = () => {
    setCartCount ( cartCount - 1) ;
    return true;
  }


  function totalItems () {
    let fullCart = cartItems; 
    let runningTotal = 0; 
    console.log("are you running");
    for (let item = 0; item < fullCart.length; item++){
      runningTotal += (fullCart[item].quantity) * (fullCart[item].price);
      console.log(runningTotal);
    }
    return runningTotal;
  }
/*
  function summarizeCart () {
    console.log(cartItems);
    let red = cartItems.filter(item =>  item.name == "Red Daruma");
    let black = cartItems.filter(item => item.name == "Black Daruma");
    let yellow = cartItems.filter(item => item.name === "Yellow Daruma");
    let purple = cartItems.filter(item => item.name === "Purple Daruma");
    let pink = cartItems.filter(item => item.name === "Pink Daruma");
    let gold = cartItems.filter(item => item.name === "Gold Daruma");

    let redTotal = red.reduce((sum, amount) => sum + amount.quantity, 0);
      // we now have to create a new object with quantity = redTotal. -
      // then re add to shooping cart? .... > or just do this every time cart is displayed ?? 
      // re code to make add modify cart directly ... ?? 
  }; */

  function cartCheck () { // test code remove on polish
    console.log(cartItems);
    console.log(cartItems.length); // test code remove on polish
    console.log(cartItems[0].quantity); // test code remove on polish
  }

  return (
    <BrowserRouter>
    <div id="mainpage">
      <Nav count={cartCount} />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/Cart" render={(props) => < Cart {...props} add={addToCart} cart={cartItems} total={totalItems}/>} />
        <Route exact path="/Shop" render={(props) => <Shop {...props} add={addToCart} check={cartCheck}/>} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;