import React from "react";
import { useState } from "react";

const Cart = (props) => {
    const [cartItemsList, setCartItemsList] = useState (props.cart);

    // code to remove 0 quantity items before display?
    let cartItems = props.cart;

    //run this in useEffect ?? // take out 0 quantity items 
const removeZeroQuantityItems = () => {
    for (let x = 0; x < cartItems.length; x++ ){
        if(cartItems[x].quantity === 0){
            cartItems.slice(x, 1);
        }
        else{
        }
    }
    setCartItemsList (cartItems);
}

function createTable () {
    
    for (let tableLength = 0; tableLength < cartItems.length; tableLength ++){
            //add new row  for each item
    }
}

    return (
        <div id="cart" className="cart">


            <table className="cart-table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th></th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{cartItems[0].name}</td>
                    <td><img className="cart-thumbnail" src={cartItems[0].picture} /> </td>
                    <td><button onClick={props.add}>+</button>{cartItems[0].quantity}<button>-</button></td>
                    <td>{cartItems[0].price}</td>
                </tr>
                <tr>
                    <td>Total: </td>
                    <td></td>
                    <td></td>
                    <td>{props.total()}</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};
export default Cart;
