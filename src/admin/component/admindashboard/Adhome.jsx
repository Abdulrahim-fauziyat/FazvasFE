import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../../user/utils/Spinner';
import { ENDPOINTS } from '../../../endpoint';

const Adhome = () => {
  const [wallet, setWallet] = useState(0);
  const [totalFunding, setTotalFunding] = useState(0);
  const [totalTopup, setTotalTopup] = useState(0);
  const [isLoading, setIsLoading] = useState({
    wallet: true,
    funding: true,
    topup: true,
  });
  
  let user = localStorage.getItem("fazUser");
  user = user ? JSON.parse(user) : null;
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch wallet balance
        setIsLoading(prev => ({ ...prev, wallet: true }));
        
        const response =await axios.get(`${ENDPOINTS.baseUrl}/balance`);
        setWallet(response.data.message);
        setIsLoading(prev => ({ ...prev, wallet: false }));
  
        // Fetch total funding
        setIsLoading(prev => ({ ...prev, funding: true }));
        const fundingResponse = await axios.get(`${ENDPOINTS.baseUrl}/AdminTotalFunding`, {
          params: { userId: user?._id }
        });
        setTotalFunding(fundingResponse.data.totalFunding);
        setIsLoading(prev => ({ ...prev, funding: false }));
  
        // Fetch total top-up
        setIsLoading(prev => ({ ...prev, topup: true }));
        const topupResponse = await axios.get(`${ENDPOINTS.baseUrl}/AdminTotalFunding`,{
          params: { userId: user?._id }
        });
        setTotalTopup(topupResponse.data.result);
        setIsLoading(prev => ({ ...prev, topup: false }));
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading({ wallet: false, funding: false, topup: false });
      }
    };
  
    fetchData();
  }, [user?._id]);
  

  return (
    <>
      <div className='container fw-bold'>
      <h2>Admin Dashboard</h2>
      <div className='row deck'>
        <div className="card border-primary mb-3 mx-md-2" style={{ maxWidth: '30%' }}>
          <div className="card-header">Wallet Balance</div>
          <div className="card-body text-primary">
            {isLoading.wallet ? (
              <Spinner />
            ) : (
              <h5 className="card-title">NGN {wallet ? wallet.toLocaleString('en-US') : 'Loading...'}</h5>
            )}
          </div>
        </div>
        <div className="card border-primary mb-3 mx-md-2" style={{ maxWidth: '30%' }}>
          <div className="card-header">Total Funding</div>
          <div className="card-body text-primary">
            {isLoading.funding ? (
              <Spinner />
            ) : (
              <h5 className="card-title">NGN {totalFunding ? totalFunding.toLocaleString('en-US') : 'Loading...'}</h5>
            )}
          </div>
        </div>
        <div className="card border-primary mb-3 mx-md-2" style={{ maxWidth: '30%' }}>
          <div className="card-header">Total Top-up</div>
          <div className="card-body text-primary">
            {isLoading.topup ? (
              <Spinner />
            ) : (
              <h5 className="card-title">NGN {totalTopup ? totalTopup.toLocaleString('en-US') : 'Loading...'}</h5>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Adhome;
