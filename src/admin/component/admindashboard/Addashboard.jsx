import React from 'react'
import Admdashlink from './Admdashlink'
// import Footer from '../../../user/components/Footer'
import { Outlet } from 'react-router-dom'
import Navigates from '../../../user/components/Navigate'



const Addashboard = () => {
  return (
    <>
    
    <Navigates />
      <div className="fw-bold bg-white text-primary">
        FAZVAS ADMIN 
      </div>
      <div className="row ">
        <Admdashlink />
        <div className="col-md-9 text-black ">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Addashboard
