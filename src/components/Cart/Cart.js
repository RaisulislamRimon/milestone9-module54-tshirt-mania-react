import React from "react";

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div>
      <h2>Order Summary</h2>
      <h5>Order Quantity : {cart.length}</h5>
      {cart.map((tshirt) => (
        <div key={tshirt._id}>
          <span>{tshirt.name}</span>
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
