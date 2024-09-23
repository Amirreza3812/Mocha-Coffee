import React from "react";
import MotionHoc from "./MotionHoc";
import "../styles/soon.css";
const ProjectsComponent = () => {
  return (
    <>
      <h1 className="comming-soon">COMMING SOON</h1>
    </>
  );
};

const Projects = MotionHoc(ProjectsComponent);

export default Projects;
