import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../../user/utils/Spinner";
import { ENDPOINTS } from "../../../endpoint";
import { FaPlus, FaEye, FaEyeSlash, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [fetchingAdmins, setFetchingAdmins] = useState(false);
  const [adminRole, setAdminRole] = useState("");
  const [currentUserRole, setCurrentUserRole] = useState("");

  const navigate = useNavigate();

  const options = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${ENDPOINTS.baseUrl}/Admin`, {
        name: fullName,
        email,
        phoneNumber,
        password,
        role: adminRole,
      });

      if (response.status === 201) {
        toast.success("Admin added successfully", options);
        setLoading(false);
        fetchAdmins(); // Fetch admins after adding a new one
      } else {
        toast.error("Failed to add admin", options);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error adding admin:", error);
      setLoading(false);
      toast.error("An error occurred", options);
    }
  };

  const fetchAdmins = async () => {
    setFetchingAdmins(true);
    try {
      const response = await axios.get(`${ENDPOINTS.baseUrl}/alladmin`);
      const sortedAdmins = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setAdmins(sortedAdmins);
    } catch (error) {
      console.error("Error fetching Admins:", error);
      toast.error("Failed to fetch admins", options);
    } finally {
      setFetchingAdmins(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
    // Simulate fetching the current user role
    // In a real app, you would get this from an API or auth context
    const user = JSON.parse(localStorage.getItem("fazUser"));
    if (user) {
      setCurrentUserRole(user.role);
      if (user.role !== "superadmin") {
        navigate('/addashboard/admin'); // Redirect if not superadmin
      }
    } else {
      navigate("/login"); // Redirect to login if user is not found
    }
  }, [navigate]);

  return (
    <div className="container mt-2 mb-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-auto">
          <h5 className="text-white">
            <strong>Admin</strong>
          </h5>
        </div>
        {currentUserRole === "superadmin" && (
          <div className="col-md-auto">
            <button
              type="button"
              className="btn btn-primary btn-sm mb-2"
              data-bs-toggle="modal"
              data-bs-target="#admin"
            >
              <FaPlus /> Add New
            </button>

            <div
              className="modal fade"
              id="admin"
              tabIndex="-1"
              aria-labelledby="Admin"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 text-primary" id="admin">
                      Add New Admin
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      className="p-3 fw-bolder form-floating"
                      onSubmit={handleSubmit}
                    >
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
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="number"
                          className="form-control"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Phone Number"
                        />
                        <label htmlFor="phoneNumber">Phone Number</label>
                      </div>
                      <div className="form-floating mb-3">
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
                          style={{
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                          onClick={togglePasswordVisibility}
                        >
                          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <label htmlFor="password">Password</label>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="roleSelect" className="form-label">
                          Select Role:
                        </label>
                        <select
                          id="roleSelect"
                          className="form-control"
                          name="role"
                          value={adminRole}
                          onChange={(e) => setAdminRole(e.target.value)}
                        >
                          <option value="">--Select Role--</option>
                          <option value="admin">Admin</option>
                          <option value="superadmin">Super Admin</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary fw-bold btn-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Spinner />
                        ) : (
                          <>
                            <FaPaperPlane /> Send
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {fetchingAdmins ? (
              <tr>
                <td colSpan="6">
                  <Spinner />
                </td>
              </tr>
            ) : admins.length > 0 ? (
              admins.map((admin, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{admin.name}</td>
                  <td>{admin.email}</td>
                  <td>{admin.phoneNumber}</td>
                  <td>{admin.role}</td>
                  <td>{new Date(admin.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No admins found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Admin;
