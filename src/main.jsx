import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Signup from  './user/components/auth/Signup.jsx'
import './index.css'
import Login from './user/components/auth/Login.jsx'
import Forgotpassword from './user/components/auth/Forgotpassword.jsx'
import Privacy from './user/components/auth/Privacy.jsx'
import TermsAndConditions from './user/components/auth/TermsAndConditions.jsx'
import Support from './user/components/auth/Support.jsx'
import Dashboard from './user/components/dashboard/Dashboard.jsx'
import Profile from './user/components/dashboard/Profile.jsx'
import Topup from './user/components/dashboard/Topup.jsx'
import History from './user/components/dashboard/Histroy.jsx'
import FundAccount from './user/components/dashboard/FundAccount.jsx'
import Home from './user/components/dashboard/Home.jsx'
import Addashboard from './admin/component/admindashboard/Addashboard.jsx'
import  Admindashlink from './admin/component/admindashboard/Admdashlink.jsx'
import Admin from './admin/component/admindashboard/Admin.jsx'
import Adtxhistroy from './admin/component/admindashboard/Adtxhistroy.jsx'
import Fundacc from './admin/component/admindashboard/Fundacc.jsx'
import Adhome from './admin/component/admindashboard/Adhome.jsx'
import Users from './admin/component/admindashboard/Users.jsx'
import Adtopup from './admin/component/admindashboard/Adtopup.jsx'
import Createpassword from './user/components/auth/Createpassword.jsx'
import  Verify from './user/components/dashboard/Verify.jsx'
import Adverify from './admin/component/admindashboard/Adverify.jsx'
import AdminLogin from './admin/component/admindashboard/AdminLogin.jsx'
import AdminProfile from './admin/component/admindashboard/AdminProfile.jsx'

const router = createBrowserRouter([
  { path:'/',  element:<App/>,},
  { path:'/signup',  element:<Signup/>, },
   {path:'/login', element:<Login/>,},
   {path:'/forgotpassword', element:<Forgotpassword/>,},
   { path:'/createpassword/:id/:token',  element:<Createpassword />, },
   {path:'/privacy', element:<Privacy/>,},
   {path:'/terms', element:<TermsAndConditions/>,},
   {path:'/support', element:<Support/>,},
   {path:'/adminlogin', element:<AdminLogin/>,},

  { 
    path:'/dashboard',  element:<Dashboard />, 
    children:[    
    { path:'/dashboard/profile',  element:<Profile/> },     
    { path:'/dashboard/Home',  element:<Home/> },     
    { path:'/dashboard/topup',  element:<Topup/> },     
    { path:'/dashboard/funding',  element:<FundAccount/>,},     
    { path:'/dashboard/history',  element:<History/> }, 
    { path:'/dashboard/verify/:txId/:txRef/:userId/:amount',  element:<Verify/> }        
  ], 
}, 
  
{ path:'/addashboard',  element:<Addashboard/>, 
       
    children:[
      { path:'/addashboard/admindashlink',  element:<Admindashlink/>, },
      {path:'/addashboard/admin', element:<Admin/>,},
      {path:'/addashboard/adtxhistory', element:<Adtxhistroy/>,},
      {path:'/addashboard/fundacc', element:<Fundacc/>,},
      {path:'/addashboard/adhome', element:<Adhome/>,},
      {path:'/addashboard/users', element:<Users/>,},
      {path:'/addashboard/adtopup', element:<Adtopup/>,},
      {path:'/addashboard/adminprofile', element:<AdminProfile/>,},
      { path:'/addashboard/adverify/:txId/:txRef/:userId/:amount',  element:<Adverify/> } 
    
    ],
},
 
])

  ReactDOM.createRoot(document.getElementById('root')).render(
    
      <RouterProvider router={router}>
        <App />
      </RouterProvider> 
    
  )





