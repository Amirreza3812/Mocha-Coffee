import React from "react";
import MotionHoc from "./MotionHoc";
import "../styles/rows.css";

const CakeComponent = () => {
  return (
    <>
 {/* Thay will get from api */}
      <h1>CAKE</h1>  {/* Thay will get from api */}
      <div className="container-rows">
        <div className="name-product">
          <p className="rows">اسپرسو تک</p>  {/* Thay will get from api */}
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
          <p className="rows">اسپرسو تک</p>
        </div>
        <div className="price-product">
          <p className="price-rows">30</p>  {/* Thay will get from api */}
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

const Cake = MotionHoc(CakeComponent);

export default Cake;
