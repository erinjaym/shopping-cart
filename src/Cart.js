import React from "react";

const Cart = (props) => {

    return (
        <div id="cart" className="cart">
            <table>
                <tr>
                    <th>Item </th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
                <tr>
                    <td>Test daruma</td>
                    <td>5</td>
                    <td>$12.99</td>
                </tr>


            </table>
            <div>{props.item1}</div>
            <div>{props.item2}</div>
        </div>
    );
};
export default Cart;
