import React from "react";

const Accordion = () => {
  return (
    <div
      className="accordion accordion-flush  bg-white shadow-lg"
      id="accordionFlushExample m-5 p-5"
    >
      <div className="m-2">
        <h3 className="text-center">Frequently Asked Questions</h3>
      </div>
      <div className="accordion-item bg-white">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            How do I recharge my airtime?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            To recharge your airtime, simply log in to your account on our
            website or mobile app. Navigate to the recharge section and follow
            the prompts to select your mobile network, enter the phone number
            you wish to recharge, and choose the desired recharge amount.
            Complete the payment process using one of the accepted payment
            methods, and your airtime will be credited to your phone instantly.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            What payment methods do you accept?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            We accept various payment methods to make it convenient for our
            users. You can pay using credit/debit cards, mobile wallets, bank
            transfers, and other electronic payment methods supported by our
            platform. Rest assured, all transactions are securely processed to
            protect your financial information.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            How long does it take for airtime to be credited?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            In most cases, airtime recharge transactions are processed
            instantly, and your account balance will be credited immediately
            after completing the payment. However, depending on the network
            provider or any technical issues, there may be occasional delays. If
            you encounter any delays, please contact our support team for
            assistance.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            What do I do if I encounter an error during recharge?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            If you encounter an error during the recharge process, please
            double-check the details you entered, including the phone number and
            recharge amount. Ensure that you have sufficient funds in your
            payment method and that there are no network connectivity issues. If
            the problem persists, please contact our support team with details
            of the error, and we'll assist you in resolving the issue promptly.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
