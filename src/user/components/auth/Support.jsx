import React, { useState } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import axios from "axios";

const Support = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/support", {
        subject,
        message,
      });
      setResponseMessage("Your support ticket has been submitted successfully.");
    } catch (error) {
      setResponseMessage("There was an error submitting your ticket. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            <p className="fw-bold">Phone: +234-8108398148</p>
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
            {responseMessage && (
              <div className="mt-3 alert alert-info">
                {responseMessage}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />     
    </>
  );
};

export default Support;
