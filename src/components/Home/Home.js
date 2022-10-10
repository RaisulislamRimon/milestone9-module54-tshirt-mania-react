import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);
  return (
    <div>
      <h1>home</h1>
      <p>tshirts : {tshirts.length}</p>
    </div>
  );
};

export default Home;
