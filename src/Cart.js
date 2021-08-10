import React from "react";
import Table from "./Table";

const Cart = (props) => {

    return (
        <div id="cart-display" className="cart"><center>
            <Table cart={props.cart} total={props.total} add={props.add} subtract={props.subtract}/> 
            <button id="buy" className="buy-button" onClick={props.buyAlert}>Purchase Now</button>
            </center>
        </div>
    );
};
export default Cart;
