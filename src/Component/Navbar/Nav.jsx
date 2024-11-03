import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/zic logo.png";
import './navbar.css'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <img src={logo1} alt="" className="pic2 ms-5 " />
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="mx-auto">
              <ul className="navbar-nav justify-content-between">
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown mx-4">
                  <a
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link to="/Signup" id="acct">
                        {" "}
                        STUDENT{" "}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/AdminSignin" id="acct">
                        STAFF
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link" to="/Course">
                    Course
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link" to="/Faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
