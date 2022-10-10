import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h1>Friend</h1>
      <p>
        House : {house}
        <button onClick={() => setHouse(house + 1)}>Increase</button>
        <button onClick={() => setHouse(house - 1)}>Decrease</button>
      </p>
    </div>
  );
};

export default Friend;
