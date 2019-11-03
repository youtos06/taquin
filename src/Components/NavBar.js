import React from "react";
import Cv from "./files/Youness_El_HOUSNI_CV.pdf";
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="mailto:elhousni.yns@gmail.com">
          Youness El Housni <i class="fa fa-envelope"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="https://github.com/youtos06">
                GitHub <i class="fa fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/youness-el-housni-a0b4a4166/"
              >
                Linkedin <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={Cv}>
                Download My CV <i class="fa fa-download"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
