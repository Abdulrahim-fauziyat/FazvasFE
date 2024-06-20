import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

const Support = () => {
  return (
    <>
      <Nav />
      <div className="container mt-5 mb-5 element text-white p-4">
        <h1 className="text-center mb-4">Support</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <p>
              If you need assistance or have any questions, please don't
              hesitate to reach out to our support team.
            </p>
            <p className="fw-bold">Email: support@fazvas.com.ng</p>
            <p className="fw-bold">Phone: +234-XXX-XXXXXXX</p>
          </div>
          <div className="col-md-6">
            <h3>Frequently Asked Questions (FAQs)</h3>
            <p>
              Check out our FAQs section for answers to commonly asked
              questions:
            </p>
            <ul className="list-group ">
              <li className="list-group lh-lg ">
                How do I recharge my airtime?
              </li>
              <li className="list-group lh-lg ">
                What payment methods do you accept?
              </li>
              <li className="list-group lh-lg ">
                How long does it take for airtime to be credited?
              </li>
              <li className="list-group lh-lg ">
                What do I do if I encounter an error during recharge?
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <h3>Submit a Support Ticket</h3>
            <p>
              If you couldn't find the answer to your question in our FAQs or
              need further assistance, please fill out the form below to submit
              a support ticket:
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input type="text" className="form-control" id="subject" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
