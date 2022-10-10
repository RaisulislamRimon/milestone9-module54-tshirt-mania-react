import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house }) => {
  return (
    <div>
      <h1>MySelf</h1>
      <p>House : {house}</p>
      <section className="flex">
        <Special></Special>
      </section>
    </div>
  );
};

export default MySelf;
