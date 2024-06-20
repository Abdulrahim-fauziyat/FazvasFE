import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Fazvas.png";

const Navigates = () => {
  // const Nav = ({ showAuthButtons }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary p-1 shadow-sm ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link
            className="navbar-brand mx-1  btn btn-white rounded"
            to="/"
          >
            <img
              src={Logo}
              alt="Logo"
              className="img-thumbnail pic border-0 bg-white"
              height={50}
              width={50}
            />
          </Link>
        
        </div>
      </nav>
    </>
  );
};

export default Navigates;
