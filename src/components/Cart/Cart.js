import React from "react";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p> Please, buy at least one item!!! </p>;
  } else if (cart.length === 1) {
    message = <h4>Great Choice</h4>;
  } else {
    message = <p>Thanks for buying!</p>;
  }
  return (
    <div>
      <h2>Order Summary</h2>
      <h5>Order Quantity : {cart.length}</h5>
      <p>{message}</p>
      {cart.map((tshirt) => (
        <div key={tshirt._id}>
          <span>{tshirt.name}</span>
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </div>
      ))}
      {cart.length === 3 ? "Wow! Have a nice day!!!" : "Wow"}
    </div>
  );
};

export default Cart;
