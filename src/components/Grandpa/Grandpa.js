/* import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('Matir Ring');
export const MoneyContext = createContext(555);

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa; */

import React from "react";
import "./Grandpa.css";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

const Grandpa = () => {
  const house = 7;
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <p>House : {house}</p>
      <section className="flex">
        <Father house={house}></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </section>
    </div>
  );
};

export default Grandpa;