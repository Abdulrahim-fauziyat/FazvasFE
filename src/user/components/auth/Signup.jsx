import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import Spinner from "../../utils/Spinner";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ENDPOINTS } from "../../../endpoint";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const options = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${ENDPOINTS.baseUrl}/register`, {
      fullName,
      phone: phoneNumber,
      email,
      password
    })
      .then((response) => {
        if (response.data.msg === "success" && response.status === 200) {
          toast.success("Signup successful", options);
          localStorage.setItem("fazUser", JSON.stringify(response.data.user));
          setLoading(false);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          toast.error("Signup failed", options);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("An error occurred", options);
      });
  };

  return (
    <>
      <Nav />
      <div
        className="container justify-center border-0 shadow-lg elements mb-5 mt-5 card text-black rounded"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="mt-5 text-center p-3 text-dark">Signup</h2>
        <form className="p-3 fw-bolder text-dark" onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="user-box position-relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle-icon position-absolute"
                style={{ top: "50%", right: "10px", transform: "translateY(-50%)", cursor: "pointer" }}
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary fw-bold">
            {isLoading ? <Spinner /> : 'Signup'}
          </button>
        </form>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Signup;
