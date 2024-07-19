import React from "react";
import "./ProjBox.css";

export default function ProjBox({ title, src }) {
  return (
    <div className="project-box">
      <div className="container">
        <div className="wrapper row">
          <div className="col-lg-5 col-md-5 my-2">
            <h5 className="title">{title}</h5>
            <p className="text">
              Goblin concept digital sculpture with human-like skin. Learned a
              lot of quick tips and look development.
            </p>
            <p className="subtext">
              Sculpted in ZBrush, Retopologized and Uvs Done
            </p>
            <a href="#">More shots from this project ↗ </a>
          </div>
          <div className="col-lg-5 col-md-7 my-2">
            <img src={src} alt="thumbnail" className="container-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
