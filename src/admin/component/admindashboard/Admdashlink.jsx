import React from 'react'
import { Link } from 'react-router-dom'

const Admdashlink = () => {
  return (
    <>
    
    <div
      className="col-md-3 bg-light addash"
      style={{ height: 'calc(100vh-70vh)' }}
    >
      <div className="list-group mx-auto">
        <Link
          to="/addashboard/Adhome"
          className="list-group-item list-group-item-action"
        >
          Home
        </Link>
        <Link
          to="/addashboard/fundacc"
          className="list-group-item list-group-item-action"
        >
          Fund Account
        </Link>
        <Link
          to="/addashboard/adtopup"
          className="list-group-item list-group-item-action"
        >
          Top up
        </Link>
        <Link
          to="/addashboard/adtxhistory"
          className="list-group-item list-group-item-action"
        >
         Transaction History
        </Link>
        <Link
          to="/addashboard/users"
          className="list-group-item list-group-item-action"
        >
          Users
        </Link>
        <Link
          to="/addashboard/admin"
          className="list-group-item list-group-item-action"
        >
          Admin
        </Link>
        <Link
          to="/addashboard/adminprofile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </Link>
      </div>
    </div>
    
    </>
  )
}

export default Admdashlink