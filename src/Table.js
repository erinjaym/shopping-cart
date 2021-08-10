import react from "react";

const createTable = (props) => { 

let fullCart = props.cart;

       return (
        <table className="cart-table">
            <thead>
                <tr>
                    {Object.keys(fullCart[0]).map((key) =>  ( <th>{key}</th> ))}
                </tr>
            </thead>
            <tbody>
            {fullCart.map((item, index ) => {
            return (
            <tr key={index}>
              <td>{item.name}</td>
              <td><img className="cart-thumbnail" src={item.picture} /> </td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
            );
            })}
            <tr id="total" className="total">
                <td>Total: </td>
                <td></td>
                <td></td>
                <td>{props.total()}</td>
            </tr>
            </tbody>
        </table>
       );
}

export default createTable;
