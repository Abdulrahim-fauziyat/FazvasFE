import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINTS } from '../../../endpoint'

const Adverify = () => {

  const [ isFunded, setIsFunded]     = useState(false);
  const navigate = useNavigate()

  const {txId, txRef, userId, amount,email} = useParams(); 


  useEffect( ()=>{
   
      axios.put(`${ENDPOINTS.baseUrl}/fund`,{amount:amount,userId:userId,txId:txId,email:email})
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
      <div>{ isFunded ?  navigate('/addashboard/adhome') : 'Awaiting Funding...' }</div> 
    </>
  )
}

export default Adverify
