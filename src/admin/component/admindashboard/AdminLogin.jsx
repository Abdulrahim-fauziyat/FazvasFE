import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigates from '../../../user/components/Navigate';
import Footer from "../../../user/components/Footer";
import Spinner from "../../../user/utils/Spinner";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ENDPOINTS } from "../../../endpoint";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [userRole, setUserRole] = useState("");

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
  };

  const goTo = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  let user = localStorage.getItem("fazUser");
  user = JSON.parse(user)

  useEffect(() => {
    
    const storedUserRole = JSON.parse(localStorage.getItem("fazUser"))?.role?.name;
    setUserRole(storedUserRole);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post(`${ENDPOINTS.baseUrl}/adminlogin`, { email, password })
      .then((res) => {
        if (res.status === 200) {
          const userData = res.data.user;
          localStorage.setItem("fazUser", JSON.stringify(userData));
          setUserRole(userData.role);
          // toast.success("Login successful", options);
          setTimeout(() => {
            goTo('/addashboard/adhome');
          }, 2000);
          setLoading(false);

          if (userData.role === "superadmin") {
            toast.success("Welcome super Admin", options);
            setTimeout(() => {
              goTo('/addashboard/adhome');
            }, 2000);
          } else if (userData.role === "admin") {
            toast.success("Welcome Admin", options);
            setTimeout(() => {
              goTo('/addashboard/adhome');
            }, 2000);
          } 
        } else {
          toast.error("Login failed", options);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("An error occurred", options);
      });
  };

  return (
    <>
      <Navigates />

      <div className="container justify-center shadow-sm elements mb-5 mt-5 card text-black rounded" style={{ maxWidth: "400px" }}>
        <h2 className="mt-5 text-center p-3 text-dark">Admin Login</h2>
        <form className="p-3 fw-bolder text-dark" onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
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
            <label htmlFor="password" className="form-label">Password</label>
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
              <Link to="/forgotpassword" className="text-decoration-none text-danger">Password?</Link>
            </p>
          </div>
          <button type="submit" className="btn btn-primary fw-bold">
            {isLoading ? <Spinner /> : 'Login'}
          </button>
        </form>
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
};

export default AdminLogin;
