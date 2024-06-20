import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ENDPOINTS } from '../../../endpoint';
import Spinner from  '../../../user/utils/Spinner'
import axios from 'axios';

const options = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  // transition: "Bounce",
};

const Adtopup = () => {
  let user = localStorage.getItem("fazUser");
  user = JSON.parse(user);

  const [isLoading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState(""); 
 

  const handleTopUp = (e) => {
    e.preventDefault();
    setLoading(true);  

    axios.get(`${ENDPOINTS.baseUrl}/Adtopup`, {
      params: {
        network,
        amount,
        phone: phoneNumber,
        txRef:Math.floor(Math.random()*1000 +1),
        userId: user._id
      }
    })
    .then((response) => {    
      setLoading(false);
      if (response.data.msg == "success") {
        toast.success("Recharge successful", options);
         setLoading(false)
      } else {
        toast.error("Topup failed", options);
        setLoading("false")
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error("An error occurred", options);
      setLoading(false);
    });
  };
  return (
    <div
      className="container-fluid justify-center body-bg-white border-0 shadow-lg mb-5 mt-5 text-dark rounded card"
      style={{ maxWidth: 400 }}
    >
      <div className='container'>
        <form className="p-3 fw-bolder" onSubmit={handleTopUp}>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="network" className="form-label">
              Network
            </label>
            <select
              className="form-select fw-bold"
              id="network"
              name="network"
              value={network}
              onChange={(e) => setNetwork(e.target.value)} 
            >
              <option value="" disabled>Select Network</option>
              <option value="15">MTN</option>
              <option value="6">GLO</option>
              <option value="1">AIRTEL</option>
              <option value="2">9MOBILE</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary fw-bold">
            {isLoading ? <Spinner className="spinner-border text-white" /> : "Recharge"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Adtopup;
