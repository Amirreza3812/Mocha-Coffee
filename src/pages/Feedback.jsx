import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Feedback.css";
const Feedback = () => {
  return (
    <div className="Container-Feedback">
      <div className="display">
        <div className="box">
          <h1>We value your feedback!</h1>
        </div>
        <p>
          ممنونیم از شما با حضور گرمتون در کافه ما, خاننده ی نظرات زیباتون هستیم
        </p>
        <textarea
          className="text-box"
          placeholder="نظر خود را بنویسید..."
          rows={5}
        />
        <NavLink to="coffee">
          <button className="submit-feedback">رفتن به منو</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Feedback;
