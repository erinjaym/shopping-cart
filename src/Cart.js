import React from "react";
import { useState } from "react";
import Table from "./Table";

const Cart = (props) => {
    const [cartItems, setCartItemsList] = useState (props.cart);

    return (
        <Table cart={cartItems} total={props.total} add={props.add} subtract={props.subtract}/> 
    );
};
export default Cart;
