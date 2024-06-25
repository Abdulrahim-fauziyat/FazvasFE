import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../../../endpoint';
import Spinner from "../../../user/utils/Spinner";

const Adhome = () => {
  let user = localStorage.getItem("fazUser");
  user = JSON.parse(user);

  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  const [wallet, setWallet] = useState(0); 
  const [totalFunding, setTotalFunding] = useState(0); 
  const [totalTopup, setTotaltopup] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); 
  const [isFundingFetched, setIsFundingFetched] = useState(false); 
  const [isTopupFetched, setIsTopupFetched] = useState(false); 
  




  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const response =await axios.get(`${ENDPOINTS.baseUrl}/balance`);
          setWallet(response.data.message);
          setIsLoaded(prev => ({ ...prev, wallet: false }));

        console.log(response.data.wallet);
        setWallet(response.data.wallet.balance);
      } catch (error) {
        console.error('Error fetching wallet data:', error);
      } finally {
        setIsLoaded(true);
      }
    };


        
    const fetchFundingHistory = async () => {
      try {
        const response=await axios.get(`${ENDPOINTS.baseUrl}/TotalAdminFunds`,{params: { userId: user._id } } );
        console.log(response.data.result);
        const TotalFunding =response.data.result?.reduce((ac, cur) => ac + cur.txAmount ,0)  ;

        setTotalFunding(TotalFunding);
        setIsFundingFetched(true);
      } catch (error) {
        console.error('Error fetching wallet data:', error);
      }
    };

  
    
    const fetchTopupData = async () => {
      try {
        const response = await axios.get(`${ENDPOINTS.baseUrl}/AdminTotalTopupup`, {
          params: { userId: user?._id }
        });

        console.log(response.data.result);
        const TotalTopup=response.data.result?.reduce((ac, cur) => ac + cur.txAmount ,0) ;

        setTotaltopup(TotalTopup);
        setIsTopupFetched(true);
      } catch (error) {
        console.error('Error fetching Topup data:', error);
      }
    };


    fetchWalletData(); 
    fetchFundingHistory();
    fetchTopupData();
  }, [user?._id]);


  return (
    <>
      <div className='row deck'>
        <div className="card border-primary mb-3 mx-md-2" style={{ maxWidth: '30%' }}>
          <div className="card-header">Wallet Balance</div>
          <div className="card-body text-primary">
            <h5 className="card-title">
              NGN {isLoaded ? wallet.toLocaleString('en-US') : <Spinner />}
            </h5>
          </div>
        </div>
        <div className="card border-primary mb-3 mx-md-2" style={{ maxWidth: '30%' }}>
          <div className="card-header">Σ TopUp</div>
          <div className="card-body text-primary">
            <h5 className="card-title">
              NGN {isLoaded ? totalTopup.toLocaleString('en-US') : <Spinner />}
            </h5>
          </div>
        </div>
        <div className="card border-primary mb-3 mx-md-2" style={{ maxWidth: '30%' }}>
          <div className="card-header">Σ Funding</div>
          <div className="card-body text-primary">
            <h5 className="card-title">
              NGN {totalFunding.toLocaleString('en-US')}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adhome;
