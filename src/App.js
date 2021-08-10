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

  function findItemAndAddQuantity (productName) {
      for (let x = 0; x < cartItems.length; x++ ){
        if(cartItems[x].name === productName){
          let itemReplacement = cartItems[x];
          itemReplacement.quantity = itemReplacement.quantity + 1;
          cartItems[x] = itemReplacement;
         setCartItems( cartItems );
        }else {
        }
    }
  }

  function findItemAndSubtractQuantity (productName) {
    for (let x = 0; x < cartItems.length; x++ ){
      if(cartItems[x].name === productName){
        if (cartItems[x].quantity > 0){
        let itemReplacement = cartItems[x];
        itemReplacement.quantity = itemReplacement.quantity - 1;
        cartItems[x] = itemReplacement;
       setCartItems( cartItems );
       console.log(cartItems);
        }else{
        alert('nothing to remove');
        }
      }else {
      }
  }
}

const addToCart = (productName) => {
  findItemAndAddQuantity(productName);
  addCartCount ();
};

const addCartCount = () => {
  setCartCount ( cartCount + 1);
}


  const subtractFromCart = (productName) => {
    findItemAndSubtractQuantity(productName);
    subtractCartCount ();
  }
  
  const subtractCartCount = () => {
    setCartCount ( cartCount - 1);
  }

  const buyAlert = () => {
    alert("Sorry! Only Japan has these in stock");
  }


  function totalItems () { //need to modfy to round total to two digits. 
    let fullCart = cartItems; 
    let runningTotal = 0; 
    for (let item = 0; item < fullCart.length; item++){
      runningTotal += (fullCart[item].quantity) * (fullCart[item].price);
    }
    return runningTotal;
  }

  return (
    <BrowserRouter>
    <div id="mainpage">
      <Nav count={cartCount} />
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path="/Cart" render={(props) => < Cart {...props} add={addToCart} subtract={subtractFromCart} cart={cartItems} total={totalItems} buyAlert={buyAlert}/>} />
        <Route exact path="/Shop" render={(props) => <Shop {...props} add={addToCart}/>} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;