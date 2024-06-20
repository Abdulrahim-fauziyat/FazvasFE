import React, { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Dashlinks from "./Dashlinks";
import { Outlet } from "react-router-dom";
import Navigates from "../Navigate";

const Dashboard = () => {
  // const [isLoading, setLoading] = useState(true); // Assuming the dashboard starts loading

  // Function to simulate loading state change for demonstration purposes
  // const toggleLoading = () => {
  //   setLoading(!isLoading);
  // };

  return (
    <>
      {/* <Nav showAuthButtons={!isLoading} /> Pass the state to Nav component */}
      <Navigates/> 
      <div className="row">
        <Dashlinks />
        <div className="col-md-9 text-black">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
      {/* Button to simulate loading state change */}
      {/* <button>Toggle Loading</button> */}
    </>
  );
};

export default Dashboard;
