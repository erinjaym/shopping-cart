const Table = (props) => {
  let fullCart = props.cart;
  let toBuy = fullCart.filter((item) => item.quantity > 0);

  return (
    <table className="cart-table">
      <thead>
        <tr>
          {Object.keys(fullCart[0]).map((key) => (
            <th>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {toBuy.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <img
                  alt="product-thumbnail"
                  className="cart-thumbnail"
                  src={item.picture}
                />{" "}
              </td>
              <td>
                <button
                  className="quantity-button"
                  onClick={() => props.add(item.name)}
                >
                  +
                </button>
                {item.quantity}
                <button
                  className="quantity-button"
                  onClick={() => props.subtract(item.name)}
                >
                  -
                </button>
              </td>
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
};

export default Table;
