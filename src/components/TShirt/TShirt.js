import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handleAddToCart }) => {
  const { _id, name, picture, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt={name} />
      <h1>{name}</h1>
      <h4>Price : ${price}</h4>
      <button onClick={() => handleAddToCart(_id)}>Add to cart</button>
    </div>
  );
};

export default TShirt;
