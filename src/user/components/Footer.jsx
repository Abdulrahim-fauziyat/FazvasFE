import React from "react";
import { Link } from "react-router-dom";
import { FaSquarePhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
    <div className="footer py-5 bg-dark element">
      <div className="container py-3 px-2 ">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-lg-4">
            <ul  className="list-group ">
              <li  className="list-group text-white">
                {" "}
                 <span>
                 <FaSquarePhone/> Phone:{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=08108398148"
                  className={`links`} 
                >
                  08108398148
                 
                </a>
                 </span>
              </li>
              <li  className="list-group text-white">
                {" "}
                 <span><AiTwotoneMail />Email: info@fazvas.com.ng </span>
              </li>
              <li  className="list-group text-white">
                <span> {" "}
                <IoLocationOutline /> Address: Jahi 1, FCT{" "}</span>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4">
            <ul  className="list-group list-group-flush">
              <li  className="list-group ">
                <Link className={`links`} to="/signup">
                  {" "}
                  Signup{" "}
                </Link>
              </li>
              <li  className="list-group">
                <Link className={`links`} to="/login">
                  {" "}
                  Login{" "}
                </Link>
              </li>
              <li  className="list-group">
                <Link className={`links`} to="/support">
                  {" "}
                  Support{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-lg-4">
            <ul  className="list-group list-group-flush">
              <li className="list-group">
                {" "}
                <Link className={`links`} to="/privacy">
                  {" "}
                  Privacy Policy
                </Link>{" "}
              </li>
              <li  className="list-group">
                {" "}
                <Link className={`links`}  to="/terms">
                  Terms & Condition{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
