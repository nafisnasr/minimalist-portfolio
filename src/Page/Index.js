import React from 'react'
import ProjBox from "../Components/ProjBox/ProjBox";
import { FaArrowDownLong } from "react-icons/fa6";


export default function Index() {
  const projectData = [
    { id: 1, title: "01 / Project Name", src: "./images/thumbnail.png" },
    { id: 2, title: "02 / Project Name", src: "./images/thumbnail.png" },
    { id: 3, title: "03 / Project Name", src: "./images/thumbnail.png" },
  ];
  return (
    <>
      <main className="my-2">
        <div className="container">
          <div className="wrapper p-2">
            <div className="p-3">
              <h2 className="title">Hello, I’m</h2>
              <h2 className="title">Mehmet Akif.</h2>
            </div>
            <div className="box p-2">
              <p className="text p-3">
                A senior-year design student who trying to specialize in 3D
                modeling & texturing.
              </p>
            </div>
          </div>
          <span className="p-2">
            <FaArrowDownLong className="arrow-down mx-3" />
          </span>
        </div>
      </main>
      {projectData.map((item) => (
        <ProjBox {...item} />
      ))}
    </>
  );
}


