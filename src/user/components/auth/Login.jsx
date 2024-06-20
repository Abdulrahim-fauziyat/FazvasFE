import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import Spinner from "../../utils/Spinner";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ENDPOINTS } from "../../../endpoint";
const Login = () => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const [isLoading,setLoading] =useState(false);
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
    transition: "Bounce",
  }

   const goTo =useNavigate();

    
     const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
   const handleLogin = ( e ) => {
    e.preventDefault();
    console.log(email,password);
    setLoading(true);
    // make a api call to login and
    axios.post(`${ENDPOINTS.baseUrl}/login`,{ email, password })
    .then((response) => {
        console.log(response);
        if (response.data.msg === "success" && response.statusText === "OK") {
           toast.success(response.data.msg,options);
           setLoading(false);
           localStorage.setItem("fazUser",JSON.stringify(response.data.user));
           // wait for 2 seconds 
           setTimeout( ()=>{
             goTo('/dashboard/Home');
           },2000);
          
        } else {
          toast.error("Login failed", options);
          alert("invalid details")
          setLoading("false")
        }
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      toast.error("An error occurred", options);
    });
 };

  return (
    <>
      <Nav />

      <div
        className="container justify-center  shadow-sm elements mb-5 mt-5 card text-black rounded"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="mt-5 text-center p-3 text-dark"> Login</h2>
        <form className="p-3 fw-bolder text-dark " onSubmit={handleLogin}>
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
              onChange={ ( e ) => setEmail( e.target.value ) }
            />
          </div>

          <div className="mb-3  ">
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
            <p className="text-dark">
              Forgot{" "}
              <Link to="/forgotpassword" className="text-decoration-none text-danger">
                Password ?
              </Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary fw-bold">
             {isLoading ? <Spinner/> : 'Login'}
          </button>
        </form>
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
};

export default Login;
