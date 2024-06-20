import React from "react";
import { Link } from "react-router-dom";

const Dashlinks = () => {
  return (
    <>
    
      <div
        className="col-md-3 bg-light shadow-lg border-none rounded "
        style={{ height: 'calc(100vh-80vh)' }}
      >
        
        <div className="list-group mx-auto  border-none rounded">
          <Link
            to="/dashboard/home"
            className="list-group-item list-group-item-action  border-none rounded text-dark"
          >
            Home
          </Link>
          <Link
            to="/dashboard/funding"
            className="list-group-item list-group-item-action  border-none rounded  text-dark"
          >
            Fund Account
          </Link>
          <Link
            to="/dashboard/topup"
            className="list-group-item list-group-item-action  border-none rounded text-dark"
          >
            Top up
          </Link>
          <Link
            to="/dashboard/history"
            className="list-group-item list-group-item-action   border-none rounded text-dark"
          >
            History
          </Link>
          <Link
            to="/dashboard/profile" 
            className="list-group-item list-group-item-action  border-none rounded  text-dark"
          >
            Profile
          </Link>
        </div>
      </div>

    
    </>
  );
};

export default Dashlinks;
