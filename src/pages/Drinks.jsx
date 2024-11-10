import React from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";


const DrinksComponent = () => {
  return (
    <>
      
      {/* Thay will get from api */}
      <h1>DRINKS</h1>
      <div className="container-rows">
        <div className="name-product">
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
        </div>
        <div className="price-product">
          <p className="price-rows">30</p>
          <p className="price-rows">60</p>
          <p className="price-rows">90</p>
          <p className="price-rows">95</p>
          <p className="price-rows">95</p>
          <p className="price-rows">95</p>
          <p className="price-rows">70</p>
        </div>
      </div>
    </>
  );
};

const Drinks = MotionHoc(DrinksComponent);

export default Drinks;
