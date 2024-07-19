import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <a href="#">Mehmet Akif Karasu ⏤ 2020</a>
        <ul className="footer-list">
          <a className="text-decoration-underline" href="https://www.linkedin.com/">Linkedin</a>
          <a className="text-decoration-underline" href="https://github.com/">GitHub</a>
          <a className="text-decoration-underline" href="https://twitter.com/">twitter</a>
        </ul>
      </div>
    </footer>
  );
}
