import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions — Serwise",
  description: "Read the Terms and Conditions governing your use of the Serwise platform.",
};

export default function TermsPage() {
  return (
    <PolicyLayout
      title={"Terms &\nConditions"}
      lastUpdated="11 January 2026"
    >
      {/* 1. Introduction */}
      <section className="ps">
        <div className="ps-num">Section 01</div>
        <h2 className="ps-title">Introduction and Acceptance of Terms</h2>
        <p className="ps-body">
          Welcome to Serwise. These Terms and Conditions ("Terms", "Agreement") form a legally binding agreement between you
          ("User" or "Customer") and <strong>Radix Technologies</strong>, operating under the name <strong>Serwise</strong>{" "}
          ("Serwise", "we", "us", "our", "Platform").
        </p>
        <p className="ps-body">
          These Terms govern your access to and use of the Serwise mobile application and related services.
        </p>
        <div className="ps-note">
          By downloading, installing, accessing, or using the Platform, you acknowledge that you have read, understood, and agreed
          to be bound by these Terms. If you do not agree, you must immediately stop using the Platform.
        </div>
      </section>

      {/* 2. Account Creation */}
      <section className="ps">
        <div className="ps-num">Section 02</div>
        <h2 className="ps-title">Account Creation &amp; Registration</h2>

        <div className="ps-sub">Account Creation Requirement</div>
        <p className="ps-body">
          To access and use the Serwise Platform, <strong>Customers must create a user account</strong>. Account creation is mandatory
          to request services, approve quotations, make payments, use subscriptions (AMC), and communicate through the Platform.
        </p>

        <div className="ps-sub">Registration Information</div>
        <p className="ps-body">
          During account creation, Customers are required to provide accurate, complete, and up-to-date information, including but not limited to:
        </p>
        <ul className="ps-ul">
          <li>Full name</li>
          <li>Valid mobile number (OTP verification mandatory)</li>
          <li>Email address</li>
          <li>Service location/address</li>
          <li>Secure login credentials</li>
        </ul>
        <p className="ps-body">
          Customers must ensure that all information provided remains accurate at all times and must promptly update any changes.
        </p>

        <div className="ps-sub">Mobile Number Verification</div>
        <p className="ps-body">
          Account creation requires verification of the Customer's mobile number through a One-Time Password (OTP). This number will
          be used for account authentication, service notifications, booking updates, and customer support communication.
        </p>

        <div className="ps-sub">Account Responsibility and Security</div>
        <p className="ps-body">Customers are solely responsible for:</p>
        <ul className="ps-ul">
          <li>Maintaining the confidentiality of their account credentials</li>
          <li>All activities conducted through their account</li>
          <li>Preventing unauthorized access</li>
        </ul>
        <p className="ps-body">
          Serwise shall not be liable for any loss or damage arising from unauthorized account access caused by the Customer's
          failure to secure login credentials.
        </p>

        <div className="ps-sub">Accuracy and Misuse</div>
        <p className="ps-body">
          Providing false, misleading, or incomplete information, or misusing the Platform, may result in:
        </p>
        <ul className="ps-ul">
          <li>Temporary suspension of the account</li>
          <li>Permanent termination of access</li>
          <li>Restriction of Platform features</li>
        </ul>
        <p className="ps-body">
          Serwise reserves the right to refuse or terminate account access at its discretion to protect Platform integrity and
          comply with applicable laws.
        </p>
      </section>

      {/* 3. About Serwise */}
      <section className="ps">
        <div className="ps-num">Section 03</div>
        <h2 className="ps-title">About Serwise &amp; Platform Role</h2>

        <div className="ps-sub">3.1 Platform Description</div>
        <p className="ps-body">
          Serwise is a <strong>technology-enabled intermediary platform</strong> that allows Customers to discover, book, communicate
          with, and pay for home appliance repair and maintenance services offered by{" "}
          <strong>independent third-party service providers</strong>.
        </p>
        <p className="ps-body">
          Serwise <strong>does not itself perform any home appliance repair or maintenance services</strong>.
        </p>

        <div className="ps-sub">3.2 No Employment or Agency</div>
        <p className="ps-body">Serwise <strong>does not employ service providers</strong>.</p>
        <p className="ps-body">
          Service providers are <strong>independent gig workers</strong> and are not employees, agents, partners, or representatives
          of Serwise.
        </p>
        <p className="ps-body">
          Nothing in these Terms creates an employment, partnership, agency, joint venture, or franchising relationship between
          Serwise and any service provider.
        </p>
      </section>

      {/* 4. Pricing */}
      <section className="ps">
        <div className="ps-num">Section 04</div>
        <h2 className="ps-title">Pricing Standardization &amp; Quotations</h2>
        <p className="ps-body">
          Although service providers are independent, <strong>all service pricing and quotations shown to Customers are standardized,
          reviewed, and approved by Serwise</strong>.
        </p>
        <p className="ps-body">
          Any quotation created by a service provider is generated <strong>only through the Platform</strong> and is subject to
          Serwise's pricing rules and approval process. Accordingly:
        </p>
        <ul className="ps-ul">
          <li>The <strong>final price charged to the Customer is determined and controlled by Serwise</strong></li>
          <li>Service providers are <strong>not permitted to charge any amount outside the approved quotation</strong></li>
          <li>Any price charged to the Customer through the Platform is <strong>the responsibility of Serwise</strong></li>
        </ul>
      </section>

      {/* 5. Quotation Approval */}
      <section className="ps">
        <div className="ps-num">Section 05</div>
        <h2 className="ps-title">Quotation Approval &amp; Payment Obligation</h2>
        <p className="ps-body">
          Once a <strong>Customer approves a quotation</strong> for any service through the Platform, the quotation becomes{" "}
          <strong>final, binding, and payable</strong>.
        </p>
        <p className="ps-body">The Customer agrees to:</p>
        <ul className="ps-ul">
          <li>Pay the <strong>full agreed amount</strong> displayed in the approved quotation</li>
          <li>Make payment upon service completion or as specified on the Platform</li>
        </ul>
        <p className="ps-body">Failure to pay an approved quotation may result in:</p>
        <ul className="ps-ul">
          <li>Account suspension</li>
          <li>Restriction of future bookings</li>
          <li>Other actions permitted under applicable law</li>
        </ul>
      </section>

      {/* 6. AMC */}
      <section className="ps">
        <div className="ps-num">Section 06</div>
        <h2 className="ps-title">Subscription / Annual Maintenance Contract (AMC)</h2>
        <p className="ps-body">
          The subscription feature available on the Platform represents an{" "}
          <strong>Annual Maintenance Contract (AMC)</strong>.
        </p>
        <p className="ps-body">
          Subscription pricing, scope of services, duration, visit limits, and coverage are:
        </p>
        <ul className="ps-ul">
          <li>Standardized and defined by Serwise</li>
          <li>Applicable to <strong>real-world service delivery</strong>, not just in-app use</li>
        </ul>
        <p className="ps-body">
          By purchasing a subscription, the Customer agrees to the AMC terms, pricing, service conditions, and validity period
          displayed at the time of purchase.
        </p>
      </section>

      {/* 7. Payments */}
      <section className="ps">
        <div className="ps-num">Section 07</div>
        <h2 className="ps-title">Payments &amp; Transactions</h2>
        <p className="ps-body">Customers may make payments using available methods, including:</p>
        <ul className="ps-ul">
          <li>UPI</li>
          <li>Debit/Credit Cards</li>
          <li>Net Banking</li>
          <li>Digital Wallets</li>
          <li>Cash (where permitted)</li>
        </ul>
        <div className="ps-note">
          Customers must <strong>not make payments outside the Platform</strong> for services booked through Serwise.
        </div>
      </section>

      {/* 8. Chat */}
      <section className="ps">
        <div className="ps-num">Section 08</div>
        <h2 className="ps-title">Communication &amp; Chat Feature</h2>
        <p className="ps-body">
          The Platform provides an <strong>in-app chat feature</strong> to facilitate communication between Customers and service providers.
        </p>
        <p className="ps-body">This feature is provided solely to:</p>
        <ul className="ps-ul">
          <li>Ease coordination</li>
          <li>Clarify service requirements</li>
          <li>Support service delivery</li>
        </ul>
        <p className="ps-body">
          Serwise does not actively monitor chats in real time but <strong>reserves the right to review communications</strong> for
          dispute resolution, fraud prevention, misuse prevention, or legal compliance.
        </p>
        <p className="ps-body">
          Users must not misuse the chat feature for unlawful, abusive, misleading, or platform-bypassing communication.
        </p>
      </section>

      {/* 9. Customer Responsibilities */}
      <section className="ps">
        <div className="ps-num">Section 09</div>
        <h2 className="ps-title">Customer Responsibilities</h2>
        <p className="ps-body">Customers agree to:</p>
        <ul className="ps-ul">
          <li>Provide accurate service details</li>
          <li>Ensure safe and accessible service conditions</li>
          <li>Be present or arrange access during service</li>
          <li>Pay agreed charges promptly</li>
          <li>Treat service providers respectfully</li>
          <li>Submit honest ratings and reviews</li>
        </ul>
      </section>

      {/* 10. Risks */}
      <section className="ps">
        <div className="ps-num">Section 10</div>
        <h2 className="ps-title">Customer Risks &amp; Disclaimer</h2>
        <p className="ps-body">Customers acknowledge that:</p>
        <ul className="ps-ul">
          <li>Service providers are independent third parties</li>
          <li>Service quality may vary</li>
          <li>There may be risks of delay, damage, or injury during service</li>
        </ul>
      </section>

      {/* 11. Bookings */}
      <section className="ps">
        <div className="ps-num">Section 11</div>
        <h2 className="ps-title">Bookings, Cancellation &amp; Completion</h2>

        <div className="ps-sub">11.1 Booking Process</div>
        <ul className="ps-ul">
          <li>Customer selects service</li>
          <li>Quotation is generated</li>
          <li>Customer approves quotation</li>
          <li>Service is performed</li>
          <li>Payment is completed</li>
          <li>Rating and review submitted</li>
        </ul>

        <div className="ps-sub">11.2 Cancellation</div>
        <ul className="ps-ul">
          <li>Free cancellation up to <strong>2 hours</strong> before service</li>
          <li>Late cancellation or no-show may incur charges</li>
        </ul>

        <div className="ps-sub">11.3 Service Completion</div>
        <p className="ps-body">Service is deemed completed when:</p>
        <ul className="ps-ul">
          <li>Customer confirms completion, or</li>
          <li>No dispute is raised within 24 hours</li>
        </ul>
      </section>

      {/* 12. Disclaimer */}
      <section className="ps">
        <div className="ps-num">Section 12</div>
        <h2 className="ps-title">Important Legal Disclaimer</h2>
        <div className="ps-warning">
          <p style={{ marginBottom: 8 }}>
            SERWISE OPERATES <strong>SOLELY AS AN INTERMEDIARY PLATFORM</strong>.
          </p>
          <p style={{ marginBottom: 8 }}>
            ALL SERVICES ARE PROVIDED BY <strong>INDEPENDENT SERVICE PROVIDERS</strong>.
          </p>
          <p>
            SERWISE SHALL NOT BE LIABLE FOR ANY DAMAGES, LOSSES, INJURIES, OR CLAIMS ARISING FROM THE PERFORMANCE OF SERVICES.
          </p>
        </div>
      </section>

      {/* 13. Contact */}
      <section className="ps">
        <div className="ps-num">Section 13</div>
        <h2 className="ps-title">Contact Information</h2>
        <ul className="ps-ul">
          <li><strong>Platform Operator:</strong> Monil Dineshkumar Shah</li>
          <li><strong>Business Name:</strong> Serwise (Radix Technologies)</li>
          <li><strong>Email:</strong> shahmonil.1201@gmail.com</li>
          <li><strong>Location:</strong> Surat, Gujarat, India</li>
        </ul>
      </section>

      {/* 14. Acknowledgment */}
      <section className="ps">
        <div className="ps-num">Section 14</div>
        <h2 className="ps-title">Acknowledgment &amp; Acceptance</h2>
        <div className="ps-note">
          By using the Serwise Platform, you confirm that you have read, understood, and agreed to these Terms &amp; Conditions,
          which are governed by the laws of India.
        </div>
      </section>
    </PolicyLayout>
  );
}
