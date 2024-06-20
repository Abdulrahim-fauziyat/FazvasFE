import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

const Privacy = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid  element text-white">
        <h1 className="text-center  mb-4">Privacy Policy</h1>
        <p>
          This Privacy Policy describes how FAZVAs. We collects, uses, and
          discloses your personal information when you use our airtime recharge
          services available through our website and mobile application.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We collect certain personal information from you when you use our
          Service, including but not limited to:
        </p>
        <ul className="list-group lh-lg">
          <li className="list-group lh-lg fw-light">Your name</li>
          <li className="list-group lh-lg fw-light">Email address</li>
          <li className="list-group lh-lg fw-light">Phone number</li>
          <li className="list-group lh-lg fw-light">Payment information</li>
          <li className="list-group lh-lg fw-light">Transaction history</li>
         
        </ul>
        <h3>How We Use Your Information</h3>
        <p>We use the personal information we collect to:</p>
        <li className="list-group lh-lg fw-light">Provide customer support</li>
        <ul className="list-group lh-lg">
          <li className="list-group lh-lg fw-light">
            Process airtime recharge transactions
          </li>
          <li className="list-group lh-lg fw-light">
            Send you transactional and promotional communications
          </li>
          <li className="list-group lh-lg fw-light">
            Improve and optimize our Service
          </li>
          <li className="list-group lh-lg fw-light">
            Comply with legal obligations
          </li>
        </ul>
        <h3>Information Sharing and Disclosure</h3>
        <p>We may share your personal information with:</p>
        <ul>
          <li className="list-group lh-lg fw-light">
            Third-party service providers who assist us in providing the Service
          </li>
          <li className="list-group lh-lg fw-light">
            Legal and regulatory authorities as required by law
          </li>
        </ul>
        <h3>Security</h3>
        <p>
          We take appropriate measures to protect your personal information from
          unauthorized access, use, or disclosure.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
