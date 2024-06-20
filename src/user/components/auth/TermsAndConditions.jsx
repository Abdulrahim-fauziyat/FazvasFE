import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Nav />
      <div className="container-fluid mt-5 mb-5">
        <div className="bg-light p-4 rounded element text-white ">
          <h1 className="text-center mb-4">Terms And Conditions </h1>
          <hr className=" fw-bolder" />
          <p>
            These terms and conditions govern your use of the App and the
            services provided therein.
          </p>
          <p>
            By accessing or using the App, you agree to be bound by these Terms.
            If you do not agree to these Terms, please refrain from using the
            App.
          </p>
          <p>
            <strong>Account Registration:</strong> To use certain features of
            the App, you may be required to create an account. You agree to
            provide accurate, current, and complete information during the
            registration process.
          </p>
          <p>
            You are solely responsible for maintaining the confidentiality of
            your account credentials and for all activities that occur under
            your account.
          </p>
          <p>
            You must promptly notify us of any unauthorized use of your account
            or any other breach of security.
          </p>
          <p>
            <strong>Airtime Recharge Services:</strong> The App provides
            services for the purchase and recharge of airtime credits for mobile
            devices.
          </p>
          <p>
            By using the airtime recharge services, you agree to comply with all
            applicable laws and regulations governing the use of such services,
            including but not limited to regulations set forth by
            telecommunication providers and regulatory authorities.
          </p>
          <p>
            <strong>Payment and Transactions:</strong> Payment for airtime
            recharge transactions must be made through the designated payment
            methods provided within the App.
          </p>
          <p>
            All transactions are final and non-refundable once processed. We are
            not responsible for any errors made by users in providing payment or
            mobile phone numbers for recharge.
          </p>
          <p>
            <strong>Privacy Policy:</strong> Your use of the App is subject to
            our Privacy Policy, which governs the collection, use, and
            disclosure of your personal information. By using the App, you
            consent to the terms of our Privacy Policy.
          </p>
          <p>
            <strong>Intellectual Property:</strong> The App and its contents,
            including but not limited to text, graphics, logos, and images, are
            the property of Fazvas and are protected by intellectual property
            laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, or otherwise use any
            content from the App without prior written consent from Fazvas.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> To the fullest extent
            permitted by law, Fazvas shall not be liable for any direct,
            indirect, incidental, special, or consequential damages arising out
            of or in any way connected with your use of the App or the services
            provided therein.
          </p>
          <p>
            <strong>Modifications to Terms:</strong> Fazvas reserves the right
            to modify or amend these Terms at any time without prior notice.
            Changes to the Terms will be effective immediately upon posting.
            Your continued use of the App following the posting of any changes
            constitutes acceptance of those changes.
          </p>
          <p>
            <strong>Governing Law:</strong> These Terms shall be governed by and
            construed in accordance with the laws of Nigeria, without regard to
            its conflict of law principles.
          </p>
          <p>
            <strong>Contact Us:</strong> If you have any questions or concerns
            about these Terms or the App, please contact us at
            info@fazvas.com.ng.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
