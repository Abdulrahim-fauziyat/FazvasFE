import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Signup from './user/components/auth/Signup.jsx';
import Login from './user/components/auth/Login.jsx';
import Forgotpassword from './user/components/auth/Forgotpassword.jsx';
import Privacy from './user/components/auth/Privacy.jsx';
import TermsAndConditions from './user/components/auth/TermsAndConditions.jsx';
import Support from './user/components/auth/Support.jsx';
import Dashboard from './user/components/dashboard/Dashboard.jsx';
import Profile from './user/components/dashboard/Profile.jsx';
import Topup from './user/components/dashboard/Topup.jsx';
import History from './user/components/dashboard/Histroy.jsx';
import FundAccount from './user/components/dashboard/FundAccount.jsx';
import Home from './user/components/dashboard/Home.jsx';
import Addashboard from './admin/component/admindashboard/Addashboard.jsx';
import Admindashlink from './admin/component/admindashboard/Admdashlink.jsx';
import Admin from './admin/component/admindashboard/Admin.jsx';
import Adtxhistroy from './admin/component/admindashboard/Adtxhistroy.jsx';
import Fundacc from './admin/component/admindashboard/Fundacc.jsx';
import Adhome from './admin/component/admindashboard/Adhome.jsx';
import Users from './admin/component/admindashboard/Users.jsx';
import Adtopup from './admin/component/admindashboard/Adtopup.jsx';
import Createpassword from './user/components/auth/Createpassword.jsx';
import Verify from './user/components/dashboard/Verify.jsx';
import Adverify from './admin/component/admindashboard/Adverify.jsx';
import AdminLogin from './admin/component/admindashboard/AdminLogin.jsx';
import AdminProfile from './admin/component/admindashboard/AdminProfile.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <HashRouter> {/* Use HashRouter instead of BrowserRouter */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/createpassword/:id/:token" element={<Createpassword />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/support" element={<Support />} />
          <Route path="/adminlogin" element={<AdminLogin />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="home" element={<Home />} />
            <Route path="topup" element={<Topup />} />
            <Route path="funding" element={<FundAccount />} />
            <Route path="history" element={<History />} />
            <Route path="verify/:txId/:txRef/:userId/:amount" element={<Verify />} />
          </Route>

          <Route path="/addashboard" element={<Addashboard />}>
            <Route path="admindashlink" element={<Admindashlink />} />
            <Route path="admin" element={<Admin />} />
            <Route path="adtxhistory" element={<Adtxhistroy />} />
            <Route path="fundacc" element={<Fundacc />} />
            <Route path="adhome" element={<Adhome />} />
            <Route path="users" element={<Users />} />
            <Route path="adtopup" element={<Adtopup />} />
            <Route path="adminprofile" element={<AdminProfile />} />
            <Route path="adverify/:txId/:txRef/:userId/:amount" element={<Adverify />} />
          </Route>

          {/* Add a catch-all route for 404 */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </HashRouter>
   
  </React.StrictMode>,
);
