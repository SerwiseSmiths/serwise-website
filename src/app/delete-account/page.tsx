import PolicyLayout from "@/components/PolicyLayout";

export const metadata = {
  title: "Account Deletion — Serwise",
  description: "Learn how to request deletion of your Serwise account and personal data.",
};

export default function DeleteAccountPage() {
  return (
    <PolicyLayout
      title="Account Deletion"
      subtitle="How to request permanent deletion of your account and associated data."
      lastUpdated="6 April 2026"
    >
      {/* Section 01 */}
      <section className="ps">
        <div className="ps-num">Section 01</div>
        <h2 className="ps-title">How to Request Account Deletion</h2>
        <p className="ps-body">
          To delete your Serwise account, send an email to{" "}
          <strong>shahmonil.1201@gmail.com</strong> from the email address associated
          with your account, or include your registered phone number in the email body.
        </p>
        <ul className="ps-ul">
          <li><strong>To:</strong> shahmonil.1201@gmail.com</li>
          <li><strong>Subject:</strong> Account Deletion Request</li>
          <li><strong>Include:</strong> Your registered phone number</li>
          <li><strong>Optional:</strong> Reason for deletion</li>
        </ul>
        <div className="ps-note">
          <strong>Note:</strong> Requests sent from unrecognised addresses without a
          registered phone number may be delayed while we verify your identity.
        </div>
      </section>

      {/* Section 02 */}
      <section className="ps">
        <div className="ps-num">Section 02</div>
        <h2 className="ps-title">Processing Time</h2>
        <p className="ps-body">
          Once we receive and verify your request, your account will be scheduled for
          deletion within <strong>3–5 business days</strong>. You will receive a
          confirmation email when the deletion is complete.
        </p>
        <ul className="ps-ul">
          <li>Verification of request: within 1 business day</li>
          <li>Account deactivation: within 2 business days of verification</li>
          <li>Full data deletion: within 3–5 business days of verification</li>
        </ul>
      </section>

      {/* Section 03 */}
      <section className="ps">
        <div className="ps-num">Section 03</div>
        <h2 className="ps-title">What Gets Deleted</h2>
        <p className="ps-body">
          Upon successful deletion, all personal data tied to your account is
          permanently and irreversibly removed from our systems.
        </p>
        <ul className="ps-ul">
          <li>Profile information (name, phone number, email)</li>
          <li>Booking and service history</li>
          <li>Wallet balance and transaction records</li>
          <li>Chat messages and support conversations</li>
          <li>Saved addresses and preferences</li>
          <li>Authentication tokens and session data</li>
        </ul>
        <div className="ps-warning">
          <strong>Irreversible:</strong> Deleted data cannot be recovered under any
          circumstances. Please ensure you no longer need access to your account or its
          history before submitting a request.
        </div>
      </section>

      {/* Section 04 */}
      <section className="ps">
        <div className="ps-num">Section 04</div>
        <h2 className="ps-title">Data Retained by Law</h2>
        <p className="ps-body">
          Certain data may be retained beyond the deletion date where required by
          applicable law or regulation, including but not limited to:
        </p>
        <ul className="ps-ul">
          <li>Financial transaction records required for tax or audit purposes</li>
          <li>Data subject to an active legal dispute or regulatory inquiry</li>
          <li>Fraud prevention and platform integrity records</li>
        </ul>
        <div className="ps-note">
          Retained data is held securely, used only for the specific legal purpose, and
          deleted as soon as that obligation expires.
        </div>
      </section>

      {/* Section 05 */}
      <section className="ps">
        <div className="ps-num">Section 05</div>
        <h2 className="ps-title">Pending Obligations</h2>
        <p className="ps-body">
          Account deletion may be temporarily deferred if there are outstanding
          obligations on your account, such as:
        </p>
        <ul className="ps-ul">
          <li>An active or recently completed booking awaiting settlement</li>
          <li>An unresolved refund or dispute</li>
          <li>A pending wallet withdrawal</li>
        </ul>
        <p className="ps-body">
          We will notify you of any such deferral and complete the deletion once the
          obligation is resolved.
        </p>
      </section>
    </PolicyLayout>
  );
}
