import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = ({ house }) => {
  const money = useContext(MoneyContext);
  return (
    <div>
      <h1>Sister</h1>
      {/* <p>House : {house}</p> */}
      <p>Money : {money}</p>
    </div>
  );
};

export default Sister;
