import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Fazvas.png";

const Nav = () => {
  // const Nav = ({ showAuthButtons }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary shadow-sm ">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link
            className="navbar-brand mx-1 text-decoration-none btn btn-white rounded mx-2  fs-5"
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
          <div className="shadow-sm border-0">
            <div className="btn-group">
             
                <>
                  <Link className="btn btn-primary mx-1" to="/signup">
                    Signup
                  </Link>
                  <Link className="btn btn-primary mx-1" to="/login">
                    Login
                    </Link>
                  </>
                

                {/*  {showAuthButtons && (
                <>
                  <Link className="btn btn-primary mx-1" to="/signup">
                    Signup
                  </Link>
                  <Link className="btn btn-primary mx-1" to="/login">
                    Login
                    </Link>
                  </>
                )} */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
