import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h1>Friend</h1>
      <p>Gift : {ring}</p>
    </div>
  );
};

export default Friend;
