import React from "react";
import { useState } from "react";
import Table from "./Table";

const Cart = (props) => {
    const [cartItems, setCartItemsList] = useState (props.cart);

    //run this in useEffect ?? // take out 0 quantity items 
const removeZeroQuantityItems = () => {
    let cartItemsCopy = cartItems;
    for (let x = 0; x < cartItemsCopy.length; x++ ){
        if(cartItemsCopy[x].quantity === 0){
            cartItemsCopy.slice(x, 1);
        }
        else{
        }
    }
    setCartItemsList (cartItemsCopy);
}

    return (
        <Table cart={cartItems} total={props.total}/> 
    );
};
export default Cart;
