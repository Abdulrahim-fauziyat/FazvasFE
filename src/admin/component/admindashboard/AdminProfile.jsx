import React, { useState } from "react";
import Spinner from "../../../user/utils/Spinner";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ENDPOINTS } from "../../../endpoint";

const AdminProfile = () => {
  const user = JSON.parse(localStorage.getItem("fazUser")) || {};

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

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

  const passwordSettings = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${ENDPOINTS.baseUrl}/AdminProfile`, {
        oldPassword,
        newPassword,
        confirmPassword,
        id: user._id,
      })
      .then((response) => {
        setLoading(false);
        if (response.data.status === "success") {
          toast.success("Password updated successfully", options);
        } else {
          toast.error("Failed to update password", options);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        toast.error("An error occurred", options);
      });
  };

  return (
    <div className="container-fluid body-bg-white">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card rounded border-primary text-dark shadow-lg">
              <div className="card-header border-primary bg-white h5 text-center">User Info</div>
              <div className="card-body">
                <div className="bold">Email: {user.email}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mt-4 mt-lg-0  border-primary rounded shadow-lg border-none text-dark">
              <div className="card-header  border-primary text-center bg-white h5">Update Password</div>
              <div className="card-body">
                <form className="p-3 fw-bolder" onSubmit={passwordSettings}>
                  <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">
                      Old Password
                    </label>
                    <input
                      type="password"
                      placeholder="Old password"
                      autoComplete="off"
                      className="form-control"
                      id="oldPassword"
                      name="oldPassword"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="New password"
                      autoComplete="off"
                      className="form-control"
                      id="newPassword"
                      name="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      autoComplete="off"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary fw-bold">
                    {isLoading ? <Spinner /> : "Update"}
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
