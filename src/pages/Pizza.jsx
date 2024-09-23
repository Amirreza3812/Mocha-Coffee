import React from "react";
import MotionHoc from "./MotionHoc";
import "../styles/soon.css";
const PizzaComponent = () => {
  return (
    <>
      <h1 className="comming-soon">COMMING SOON</h1>
    </>
  );
};

const Pizza = MotionHoc(PizzaComponent);

export default Pizza;
