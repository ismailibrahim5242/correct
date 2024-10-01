import React from "react";
import body from "../../assets/goto.jpg";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
          <h1 className="phone">Welcome to Hakanni High School</h1>
        </div>
        <img src={body} alt="Back" className="photo" />
      </div>

      

      <section
        className="upcoming-event text-center text-light py-5 mt-5"
        style={{backgroundColor: 'grey'}}
        >
        <div className="container my-4">
          <form
            className="d-flex justify-content-center align-items-center mt-3"
            action="#"
            method="POST"
          >
            <input
              type="email"
              className="form-control w-50 me-2"
              placeholder="Email address"
              required
            />
            <button type="submit" className="btn btn-light">
              SUBSCRIBE
            </button>
          </form>
          <hr className="bg-white my-4" />
          <div className="row">
            <div className="col-md-3">
              <h6>Hakanni High Sch</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Resources</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Guild
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    SLAY Festival
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h6>Discover</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    MMI
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    SMB
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    HGCP
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Contribute
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mt-3">
              <h6>Support</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Partner & Advertise With Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-4">
            &copy; 2023 Hakanni High School, All Rights Reserved.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
