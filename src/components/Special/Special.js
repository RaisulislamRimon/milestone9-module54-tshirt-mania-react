import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  //   const ring = useContext(RingContext);
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h1>Special</h1>
      {/* <p>Gift : {ring}</p> */}
      <p>House : {house}</p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default Special;
