import React, { useState } from "react";
import { FLWAPI } from "../../../user/utils/externals";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
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

  let user = localStorage.getItem("fazUser");
  user = JSON.parse(user);
  // const userId=userId
  const Goto = useNavigate();

  const config = {
    public_key: FLWAPI.FLW_PUB_KEY,
    tx_ref: Date.now(),
    amount: amt,
    currency: 'NGN',
    payment_options: "card",
    customer: {
      email: user.email,
      phone_number: user.phone,
      name: user.fullName,
    },
    customizations: {
      title: 'Funding My FazVas Account',
      description: 'Funding My FazVas Wallet',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handleFundingForm = (e) => {
    e.preventDefault();
    setLoading(true);
    handleFlutterPayment({
      callback: async (response) => {
        console.log(response);
        if (response.status === "successful") {
          try {
            const result = await axios.put(`${ENDPOINTS.baseUrl}/funduser`, {
              email,
              amount: amt,
              txId: response.transaction_id,
              // userId: userId,

            });
            setLoading(false);
            if (result.data.mystatus === "Success") {
              toast.success("Wallet funded successfully!", options);
              Goto("/addashboard/adhome");
            } else {
              toast.error("Topup failed", options);
            }
          } catch (error) {
            console.log(error)
            toast.error("Error funding user wallet:", error.message, options);
            setLoading(false);
          }
          closePaymentModal();
        } else {
          setLoading(false);
        }
      },
      onClose: () => {
        setLoading(false);
      },
    });
  };

  return (
    <>
      <div
        className="container justify-center mt-5 mb-5 text-dark rounded"
        style={{ maxWidth: 400 }}
      >
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
              placeholder="eg fazvas@gmail.com"
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
              placeholder="amount eg 2000"
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
