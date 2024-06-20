import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINTS } from '../../../endpoint'

const Verify = () => {

  const [ isFunded, setIsFunded]     = useState(false);
  const navigate = useNavigate()

  const {txId, txRef, userId, amount} = useParams(); 


  useEffect( ()=>{
   
      axios.put(`${ENDPOINTS.baseUrl}/fund`,{amount:amount,userId:userId,txId:txId})
      .then( ( res ) =>{
          console.info( res );
          if ( res.data.mystatus == 'success' ) setIsFunded( true );
      })
      .catch( (error )=>{
           console.log(error)
      }); 
  
  },[]);




  return (
    <>
      <div>{ isFunded ?  navigate('/dashboard/Home') : 'Awaiting Funding...' }</div> 
    </>
  )
}

export default Verify
