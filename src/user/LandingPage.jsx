import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import completed from "../assets/completed.svg";
import mtn from "../assets/mtn.jpg";
import glo from "../assets/glo.jpg";
import airtel from "../assets/airtel.jpg";
import mobile from "../assets/mobile.jpg";
import Accordion from "./components/Accordion";
import ParticlesBg from "../../src/user/components/ParticlesBg"; // Ensure the path is correct

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Nav />

      {/* Hero section */}
      <ParticlesBg>
        <div className="hero bg-dark element text-white text-center p-2">
          <div className="container w-50 py-5 px-2">
            <h1> Welcome to FazVas</h1>
            <p className="text-center fade-in-img ">
              Experience instant airtime recharge for uninterrupted communication.
              Stay always ready with our reliable and convenient airtime recharge
              service, Boost your balance and ensure uninterrupted communication
              with our quick recharges, Experience the convenience of quick and
              secure transactions with us.
            </p>
            <div className="row justify-content-center align-items-center">
              <div className="col-6 col-sm-3 col-md-2">
                <img
                  src={mtn}
                  alt="MTN"
                  className="img-fluid pic rounded-circle fade-in-img"
                />
              </div>
              <div className="col-6 col-sm-3 col-md-2">
                <img
                  src={glo}
                  alt="Glo"
                  className="img-fluid pic rounded-circle fade-in-img"
                />
              </div>
              <div className="col-6 col-sm-3 col-md-2">
                <img
                  src={airtel}
                  alt="Airtel"
                  className="img-fluid pic rounded-circle fade-in-img"
                />
              </div>
              <div className="col-6 col-sm-3 col-md-2">
                <img
                  src={mobile}
                  alt="Mobile"
                  className="img-fluid pic rounded-circle fade-in-img"
                />
              </div>
            </div>
          </div>
        </div>
      </ParticlesBg>

      {/* CTA */}
      <div className="cta py-5 bg-light text-center">
        <div className="container w-50 py-3 px-2">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-lg-4">
              <img
                src={completed}
                alt="completed"
                height={200}
                className="pic fade-in-img"
              />
            </div>
            <div className="col-md-8 col-sm-6 col-lg-8">
              <p className="lead fs-4 fw-bold lh-1">
                Recharge Your Airtime with Ease
              </p>

              <ul className="list-group lh-lg d-flex-column fast">
                <li className="list-group lh-lg fw-light">
                  <span className="fs-5 ">Fast and Secure Transactions</span>
                </li>

                <li className="list-group lh-lg fw-light">
                  <span className="fs-5 ">
                    <span className="icon p-2"></span> Support for All Major
                    Mobile Networks
                  </span>
                </li>

                <li className="list-group lh-lg fw-light">
                  <span className="fs-5 ">
                    <span className="icon p-2"></span> Pay and receive instant
                    top-up
                  </span>
                </li>

                <li className="list-group lh-lg fw-light">
                  <span className="fs-5 ">
                    <span className="icon p-2"></span> 24/7 Accessibility
                  </span>
                </li>
              </ul>
              <Link className="btn btn-primary btn-lg mx-1" to="/signup">
                {" "}
                Get Started{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Accordion />

      <Footer />
    </>
  );
};

export default LandingPage;
