import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Refund Policy — Serwise",
  description: "Understand the Serwise Refund, Cancellation & Payment Policy.",
};

export default function RefundPage() {
  return (
    <PolicyLayout
      title={"Refund, Cancellation\n& Payment Policy"}
      lastUpdated="11 January 2026"
    >
      {/* 1. Introduction */}
      <section className="ps">
        <div className="ps-num">Section 01</div>
        <h2 className="ps-title">Introduction</h2>
        <p className="ps-body">
          This Refund, Cancellation &amp; Payment Policy ("Policy") outlines the terms governing refunds, cancellations, payments,
          and related transactions on the Serwise platform, operated by <strong>Radix Technologies</strong> ("Serwise", "we", "us",
          "our", "Platform").
        </p>
        <p className="ps-body">
          This Policy should be read in conjunction with the Serwise Terms &amp; Conditions and Privacy Policy.
        </p>
        <div className="ps-note">
          By using the Platform, you agree to this Policy.
        </div>
      </section>

      {/* 2. Nature */}
      <section className="ps">
        <div className="ps-num">Section 02</div>
        <h2 className="ps-title">Nature of Platform</h2>
        <p className="ps-body">
          Serwise is a technology-enabled intermediary platform that connects Customers with independent service providers for home
          appliance repair and maintenance services.
        </p>
        <ul className="ps-ul">
          <li>Serwise standardizes pricing and quotations</li>
          <li>Services are delivered by independent third-party providers</li>
          <li>Payments are facilitated through the Platform</li>
        </ul>
      </section>

      {/* 3. Payment Terms */}
      <section className="ps">
        <div className="ps-num">Section 03</div>
        <h2 className="ps-title">Payment Terms</h2>

        <div className="ps-sub">3.1 Accepted Payment Methods</div>
        <p className="ps-body">Customers may pay using:</p>
        <ul className="ps-ul">
          <li>UPI</li>
          <li>Debit/Credit Cards</li>
          <li>Net Banking</li>
          <li>Digital Wallets</li>
          <li>Cash</li>
        </ul>

        <div className="ps-sub">3.2 Payment Obligation</div>
        <ul className="ps-ul">
          <li>Once a quotation is approved, it becomes <strong>final and binding</strong></li>
          <li>Customers must pay the full approved amount</li>
          <li>Payments must be made only through the Platform</li>
        </ul>
        <p className="ps-body">Failure to complete payment may result in:</p>
        <ul className="ps-ul">
          <li>Account suspension</li>
          <li>Restriction on future bookings</li>
        </ul>
      </section>

      {/* 4. Cancellation */}
      <section className="ps">
        <div className="ps-num">Section 04</div>
        <h2 className="ps-title">Cancellation Policy</h2>

        <div className="ps-sub">4.1 Before Service Confirmation</div>
        <p className="ps-body">
          Customers may cancel a request before quotation approval without any charges.
        </p>

        <div className="ps-sub">4.2 After Quotation Approval</div>
        <ul className="ps-ul">
          <li>Cancellation is allowed up to <strong>2 hours before scheduled service time</strong></li>
          <li>No cancellation charges will apply within this window</li>
        </ul>

        <div className="ps-sub">4.3 Late Cancellation / No-Show</div>
        <p className="ps-body">Charges may apply if:</p>
        <ul className="ps-ul">
          <li>Cancellation occurs less than 2 hours before service</li>
          <li>Customer is unavailable at the service location</li>
          <li>Service provider is denied access</li>
        </ul>
        <p className="ps-body">Such charges may include:</p>
        <ul className="ps-ul">
          <li>Visit charges</li>
          <li>Inspection fees</li>
        </ul>
      </section>

      {/* 5. Refund */}
      <section className="ps">
        <div className="ps-num">Section 05</div>
        <h2 className="ps-title">Refund Policy</h2>

        <div className="ps-sub">5.1 Eligibility for Refund</div>
        <p className="ps-body">Refunds may be issued under the following conditions:</p>
        <ul className="ps-ul">
          <li>Service not delivered after payment</li>
          <li>Service cancelled by service provider or Platform</li>
          <li>Duplicate or excess payment</li>
          <li>Verified technical/payment error</li>
          <li>Service could not be completed due to provider-side issue</li>
        </ul>

        <div className="ps-sub">5.2 Non-Refundable Cases</div>
        <p className="ps-body">
          Refunds will <strong>not</strong> be provided in the following situations:
        </p>
        <ul className="ps-ul">
          <li>Customer approves quotation and service is completed</li>
          <li>Dissatisfaction due to subjective expectations (unless verified issue)</li>
          <li>Customer not available at service time</li>
          <li>Issues arising due to incorrect information provided by the customer</li>
          <li>Minor service variations inherent to repair work</li>
        </ul>
      </section>

      {/* 6. Disputes */}
      <section className="ps">
        <div className="ps-num">Section 06</div>
        <h2 className="ps-title">Service Disputes &amp; Resolution</h2>
        <p className="ps-body">If a customer is dissatisfied:</p>
        <ul className="ps-ul">
          <li>Complaint must be raised within <strong>24 hours of service completion</strong></li>
        </ul>
        <p className="ps-body">Serwise may:</p>
        <ul className="ps-ul">
          <li>Review service details</li>
          <li>Examine chat/communication records</li>
          <li>Coordinate with service provider</li>
        </ul>
        <p className="ps-body">Resolution may include:</p>
        <ul className="ps-ul">
          <li>Partial refund</li>
          <li>Re-service</li>
          <li>Platform credit (at Serwise discretion)</li>
        </ul>
      </section>

      {/* 7. AMC */}
      <section className="ps">
        <div className="ps-num">Section 07</div>
        <h2 className="ps-title">Subscription (AMC) Refunds</h2>

        <div className="ps-sub">7.1 General Rule</div>
        <p className="ps-body">
          AMC (Annual Maintenance Contract) purchases are <strong>non-refundable once activated</strong>.
        </p>

        <div className="ps-sub">7.2 Exceptions</div>
        <p className="ps-body">Refunds may be considered if:</p>
        <ul className="ps-ul">
          <li>Subscription is cancelled before activation</li>
          <li>Service cannot be provided in the user's location</li>
          <li>Duplicate purchase occurred</li>
        </ul>

        <div className="ps-sub">7.3 Pro-Rata Refunds</div>
        <p className="ps-body">
          Partial refunds may be issued at <strong>Serwise's discretion</strong> if:
        </p>
        <ul className="ps-ul">
          <li>AMC is terminated early due to platform or provider limitations</li>
        </ul>
      </section>

      {/* 8. Process */}
      <section className="ps">
        <div className="ps-num">Section 08</div>
        <h2 className="ps-title">Refund Process</h2>

        <div className="ps-sub">8.1 How to Request</div>
        <p className="ps-body">Customers can request a refund by:</p>
        <ul className="ps-ul">
          <li><strong>Email:</strong> shahmonil.1201@gmail.com</li>
        </ul>

        <div className="ps-sub">8.2 Required Details</div>
        <ul className="ps-ul">
          <li>Order/Booking ID</li>
          <li>Payment details</li>
          <li>Reason for refund</li>
          <li>Supporting proof</li>
        </ul>
      </section>

      {/* 9. Timeline */}
      <section className="ps">
        <div className="ps-num">Section 09</div>
        <h2 className="ps-title">Refund Timeline</h2>
        <ul className="ps-ul">
          <li>Refund approval: Within <strong>5–7 business days</strong></li>
        </ul>
        <p className="ps-body">Refund processing:</p>
        <ul className="ps-ul">
          <li>UPI: 2–5 working days</li>
          <li>Cards/Net Banking: 5–10 working days</li>
          <li>Wallets: As per provider timelines</li>
        </ul>
        <div className="ps-note">
          Refunds will be processed to the original payment method unless otherwise agreed.
        </div>
      </section>

      {/* 10. Failed */}
      <section className="ps">
        <div className="ps-num">Section 10</div>
        <h2 className="ps-title">Failed Transactions</h2>
        <p className="ps-body">If payment is deducted but:</p>
        <ul className="ps-ul">
          <li>Booking is not confirmed, or</li>
          <li>Transaction fails</li>
        </ul>
        <p className="ps-body">Then:</p>
        <ul className="ps-ul">
          <li>Amount will be automatically refunded by the payment gateway within <strong>5–10 working days</strong></li>
          <li>If not received, customers should contact support</li>
        </ul>
      </section>

      {/* 11. Fraud */}
      <section className="ps">
        <div className="ps-num">Section 11</div>
        <h2 className="ps-title">Fraud &amp; Misuse</h2>
        <p className="ps-body">Serwise reserves the right to:</p>
        <ul className="ps-ul">
          <li>Reject refund requests in case of fraud or abuse</li>
          <li>Suspend accounts engaging in repeated cancellations or misuse</li>
          <li>Take legal action where necessary</li>
        </ul>
      </section>

      {/* 12. Liability */}
      <section className="ps">
        <div className="ps-num">Section 12</div>
        <h2 className="ps-title">Limitation of Liability</h2>
        <ul className="ps-ul">
          <li>Serwise acts as an intermediary platform</li>
          <li>Liability for refunds is limited to the amount paid through the Platform</li>
          <li>Serwise is not liable for indirect losses or damages</li>
        </ul>
      </section>

      {/* 13. Updates */}
      <section className="ps">
        <div className="ps-num">Section 13</div>
        <h2 className="ps-title">Policy Updates</h2>
        <ul className="ps-ul">
          <li>This Policy may be updated periodically</li>
          <li>Changes will be reflected with a revised "Last Updated" date</li>
          <li>Continued use of the Platform implies acceptance</li>
        </ul>
      </section>

      {/* 14. Contact */}
      <section className="ps">
        <div className="ps-num">Section 14</div>
        <h2 className="ps-title">Contact Information</h2>
        <ul className="ps-ul">
          <li><strong>Platform Operator:</strong> Monil Dineshkumar Shah</li>
          <li><strong>Business Name:</strong> Serwise (Radix Technologies)</li>
          <li><strong>Email:</strong> shahmonil.1201@gmail.com</li>
          <li><strong>Location:</strong> Surat, Gujarat, India</li>
        </ul>
      </section>

      {/* 15. Consent */}
      <section className="ps">
        <div className="ps-num">Section 15</div>
        <h2 className="ps-title">Consent</h2>
        <div className="ps-note">
          By using the Serwise Platform, you:
          <ul className="ps-ul" style={{ marginTop: 8 }}>
            <li>Agree to this Refund &amp; Cancellation Policy</li>
            <li>Accept the conditions related to payments, refunds, and disputes</li>
          </ul>
        </div>
      </section>
    </PolicyLayout>
  );
}
