import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <section className="text_section col-lg-5 col-md-6 col-11">
            <h2 className="title">Hi I’m Mehmet</h2>
            <h2 className="title">Akif Karasu, 3D</h2>
            <h2 className="title mb-2">artist & sculptor.</h2>

            <p className="p-2 my-2">
              My work is mainly focused on third-dimension modeling, texturing
              and rendering. I like exploring the creatures with a touch of dark
              surrealism for characters and production.
            </p>
            <p className="my-2 p-2">
              Now I’m an interactive media design student in Istanbul ⏤
              currently freelancing and seeking internship opportunities.
            </p>
          </section>
          <section className="img_section col-lg-6 col-md-6 col-11">
            <img src="/images/profile-photo.png" className="about_img" />
          </section>
        </div>
        <div className="row my-2">
          <div className="box">
            <h6 className="text-decoration-underline">Main Software</h6>
            <p>
              Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold
              Renderer, Blender, Forger
            </p>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <h6 className="text-decoration-underline">Main Skills</h6>
            <p>
              Organic and Polygonal Modeling, UV Layout, Texturing, Retopology,
              Ilustration, Sound Design
            </p>
          </div>
        </div>
        <hr />
        <div className="row my-2">
          <div className="subbox p-2 d-flex align-items-center justify-content-between">
            <div>
              <h5>I am thrilled to answer to </h5>
              <h5>
                your next project <IoMdArrowForward />
              </h5>
            </div>
            <h5 className="text-decoration-underline">
              <a href="#">makifkarasu@outlook.com</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
