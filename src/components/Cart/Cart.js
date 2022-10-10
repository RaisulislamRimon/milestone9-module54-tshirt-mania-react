import React from "react";
import "./Cart.css";

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
      <h2 className={cart.length === 2 ? "purple" : "orange"}>Order Summary</h2>
      <h5 className={`bold ${cart.length === 2 ? "blue" : "yellow"}`}>
        Order quantity: {cart.length}
      </h5>
      {/* <h5>Order Quantity : {cart.length}</h5> */}
      <p>{message}</p>
      {cart.map((tshirt) => (
        <div key={tshirt._id}>
          <span>{tshirt.name}</span>
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </div>
      ))}

      {cart.length === 3 ? "Wow! Have a nice day!!!" : "Wow"}

      <p>and operator</p>
      {cart.length === 2 && <h2>Double items</h2>}

      <p>OR Operator</p>
      {cart.length === 4 || <p>Charta item na</p>}
    </div>
  );
};

export default Cart;

/* 
Conditional Rendering
1. use element in a variable and then use if-else to set value
2. ternary operation condition ? true : false 
3. && operator (if condition is true, i want to display something)
4. || operator (if condition is false, i want to display something)
*/
