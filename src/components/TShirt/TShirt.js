import React from "react";

const TShirt = ({ tshirt }) => {
  const { name, picture } = tshirt;
  return (
    <div>
      <img src={picture} alt={name} />
      <h1>{name}</h1>
    </div>
  );
};

export default TShirt;
