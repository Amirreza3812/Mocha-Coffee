import React from "react";
import MotionHoc from "./MotionHoc";

const DocumentComponent = () => {
  return <h1>Document</h1>;
};

const Document = MotionHoc(DocumentComponent);

export default Document;
