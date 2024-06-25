import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENDPOINTS } from "../../../endpoint";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FundAccount = () => {
  const [amt, setAmt] = useState(1000);
  const [email, setEmail] = useState("");
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
  };

  const Goto = useNavigate();

  const handleFundingForm = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const result = await axios.put(`${ENDPOINTS.baseUrl}/funduser`, {
        email,
        amount: amt,
        txId: Math.floor(Math.random() * 200000000).toString(),
        adminEmail:JSON.parse(localStorage.getItem("fazUser")).email
      });

      setLoading(false);

      if (result.data.mystatus === "success") {
        toast.success("Wallet funded successfully!", options);
        Goto("/addashboard/adhome");
      } else {
        toast.error("Funding failed. Please try again later.", options);
      }
    } catch (error) {
      console.log("Error funding user wallet:", error);
      toast.error("Error funding user wallet. Please try again later.", options);
      setLoading(false);
    }
  };

  const validateForm = () => {
    if (!email.trim()) {
      toast.error("Email is required.", options);
      return false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Invalid email format.", options);
      return false;
    }

    if (amt < 50 || amt > 100000) {
      toast.error("Amount must be between 50 and 100,000.", options);
      return false;
    }

    return true;
  };

  return (
    <>
      <div className="container justify-center mt-5 mb-5 text-dark rounded" style={{ maxWidth: 400 }}>
        <form className="p-3 fw-bolder card" onSubmit={handleFundingForm}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="e.g., fazvas@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="Amount e.g., 2000"
              min={50}
              max={100000}
              value={amt}
              onChange={(e) => setAmt(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary fw-bold" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Fund"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default FundAccount;
