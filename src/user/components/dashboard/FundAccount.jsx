import React, { useState } from "react";
import { FLWAPI } from "../../utils/externals";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ENDPOINTS } from "../../../endpoint";


const FundAccount = () => {
  const [ amt, setAmt] = useState(1000);
  const [ isLoading, setLoading] = useState(false);

  let user = localStorage.getItem("fazUser");
  user = JSON.parse(user);

  const Goto = useNavigate();

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

  const config = {
    public_key: FLWAPI.FLW_PUB_KEY,
    tx_ref: Date.now(),
    amount: amt,
    currency: 'NGN',
    payment_options:"card", 
    customer: {
      email: user.email,
      phone_number: user.phone,
      name: user.fullName
    }, 
    customizations: {
      title: 'Funding My FazVas Account',
      description: 'Funding My FazVas Wallet',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const handleFundingForm = (e)=>{
    e.preventDefault();
    setLoading(true)
      return handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          if(response){
            setLoading(false)
             if( response.status == "successful"){ 
              Goto(`../verify/${response.transaction_id}/${response.tx_ref}/${user._id}/${response.amount}`)
             
              closePaymentModal()
            }
          }
            // closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {},
      });
  }


  return (
    <>
    <div
        className="container justify-center  mt-5 mb-5  text-dark rounded"
        style={{ maxWidth: 400 }}
      >
     
        <form className="p-3 fw-bolder card" onSubmit={handleFundingForm}>
         
          <div className="mb-3 ">
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
            />
          </div>

          <button type="submit" className="btn btn-primary fw-bold " disabled={isLoading}>
            { isLoading ? "please wait...": "Fund"}
          </button>
        </form>
      </div>
      



     </>
  );
};


export default FundAccount;
