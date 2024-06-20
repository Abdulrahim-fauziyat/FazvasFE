import React, { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { ENDPOINTS } from "../../../endpoint";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../../utils/Spinner";

const Forgotpassword = () => {
  const [email, setEmail] = useState();
  const [isLoading, setLoading] = useState(false);

  const goTo = useNavigate();



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

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    // make a api call to send email for forgotten password"
    axios.post(`${ENDPOINTS.baseUrl}/forgotpassword`, { email })
      .then((response) => {
        if (response.data.status.trim() === "success") {
          toast.success(response.data.status, options);
          setLoading(false);
          // wait for 3 seconds
          setTimeout(() => {
            goTo("/login"); // if success refer fazvas user back to login
          }, 2000);
        } else {
          setLoading(false); // stop spinner loading
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

 

  return (
    <>
      <Nav />

      <div
        className="container justify-center elements mb-5 mt-5  text-dark shadow-lg rounded"
        style={{ maxWidth: 400 }}
      >
        <form className="p-3 fw-bolder" onSubmit={handleSubmit}>
          <h3 className="mt-5 text-center p-3">Forgot password</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
            <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary fw-bold ">
            {isLoading ? <Spinner /> : "Send"}
          </button>
        </form>
        <ToastContainer />
      </div>

      <Footer />
    </>
  );
};

export default Forgotpassword;
