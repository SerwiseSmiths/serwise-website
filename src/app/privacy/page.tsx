import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Serwise",
  description: "Learn how Serwise collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="11 January 2026"
    >
      {/* Intro */}
      <section className="ps">
        <p className="ps-body">
          Serwise ("Serwise", "we", "us", "our", "Platform") is committed to protecting your privacy. This Privacy Policy explains
          how Serwise, operating under the name <strong>Radix Technologies</strong>, collects, uses, stores, shares, and protects your
          personal information when you use the Serwise mobile application and related services.
        </p>
        <div className="ps-note">
          By accessing or using the Platform, you <strong>consent to the practices described in this Privacy Policy</strong>.
        </div>
      </section>

      {/* 1. Scope */}
      <section className="ps">
        <div className="ps-num">Section 01</div>
        <h2 className="ps-title">Scope of This Privacy Policy</h2>
        <p className="ps-body">This Privacy Policy applies to:</p>
        <ul className="ps-ul">
          <li>The Serwise mobile application</li>
          <li>All services, features, subscriptions (AMC), and communications offered through the Platform</li>
        </ul>
        <p className="ps-body">
          This policy applies <strong>only to Customers/Users</strong> of the Platform.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section className="ps">
        <div className="ps-num">Section 02</div>
        <h2 className="ps-title">Information We Collect</h2>

        <div className="ps-sub">2.1 Information You Provide Directly</div>
        <p className="ps-body">When you create an account or use the Platform, we may collect:</p>
        <ul className="ps-ul">
          <li>Full name</li>
          <li>Mobile number (OTP verified)</li>
          <li>Email address</li>
          <li>Service address / location</li>
          <li>Booking and quotation details</li>
          <li>Subscription (AMC) information</li>
          <li>In-app chat communications</li>
          <li>Customer support communications</li>
        </ul>

        <div className="ps-sub">2.2 Automatically Collected Information</div>
        <p className="ps-body">When you use the Platform, we may automatically collect:</p>
        <ul className="ps-ul">
          <li>Device information (device model, OS version)</li>
          <li>IP address</li>
          <li>App usage data and interaction logs</li>
          <li>Date, time, and duration of app usage</li>
          <li>Crash logs and performance diagnostics</li>
        </ul>
      </section>

      {/* 3. Payment */}
      <section className="ps">
        <div className="ps-num">Section 03</div>
        <h2 className="ps-title">Payment Information</h2>
        <p className="ps-body">
          Serwise <strong>does not store</strong> your debit card, credit card, UPI, or banking information.
        </p>
        <p className="ps-body">
          All payments are processed securely through <strong>third-party payment gateway providers</strong>, who handle your payment
          data in accordance with their own privacy policies and security standards.
        </p>
      </section>

      {/* 4. AdMob */}
      <section className="ps">
        <div className="ps-num">Section 04</div>
        <h2 className="ps-title">Advertising &amp; AdMob (Important Disclosure)</h2>
        <p className="ps-body">
          Serwise uses <strong>Google AdMob</strong>, an advertising service provided by Google LLC, to display advertisements within
          the app.
        </p>

        <div className="ps-sub">4.1 Information Collected by AdMob</div>
        <p className="ps-body">AdMob may collect and process information such as:</p>
        <ul className="ps-ul">
          <li>Device identifiers (Advertising ID)</li>
          <li>IP address</li>
          <li>App usage data</li>
          <li>Approximate location</li>
          <li>Ad interaction data</li>
        </ul>
        <p className="ps-body">This data is used to:</p>
        <ul className="ps-ul">
          <li>Display personalized or non-personalized ads</li>
          <li>Measure ad performance</li>
          <li>Prevent fraud and abuse</li>
        </ul>

        <div className="ps-sub">4.2 Google Advertising Policies</div>
        <p className="ps-body">
          Google may use cookies or similar technologies to serve ads based on your prior usage of this or other apps.
        </p>
        <p className="ps-body">
          You can learn more about how Google uses data here:{" "}
          <span style={{ color: "#555", wordBreak: "break-all" }}>https://policies.google.com/privacy</span>
        </p>
        <p className="ps-body">
          You can opt out of personalized advertising by adjusting your device's ad settings.
        </p>
      </section>

      {/* 5. How We Use */}
      <section className="ps">
        <div className="ps-num">Section 05</div>
        <h2 className="ps-title">How We Use Your Information</h2>
        <p className="ps-body">We use collected information to:</p>
        <ul className="ps-ul">
          <li>Create and manage user accounts</li>
          <li>Enable service bookings and quotation approvals</li>
          <li>Process payments and subscriptions (AMC)</li>
          <li>Facilitate in-app chat communication</li>
          <li>Provide customer support</li>
          <li>Improve app performance and features</li>
          <li>Display advertisements through AdMob</li>
          <li>Detect and prevent fraud or misuse</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      {/* 6. Sharing */}
      <section className="ps">
        <div className="ps-num">Section 06</div>
        <h2 className="ps-title">Sharing of Information</h2>
        <p className="ps-body">We share your information <strong>only when necessary</strong>, including:</p>

        <div className="ps-sub">6.1 With Service Providers</div>
        <p className="ps-body">Limited information such as:</p>
        <ul className="ps-ul">
          <li>Name</li>
          <li>Contact number</li>
          <li>Service address</li>
          <li>Booking details</li>
        </ul>
        <p className="ps-body">Shared strictly to <strong>fulfill</strong> your service request.</p>

        <div className="ps-sub">6.2 With Advertising &amp; Analytics Partners</div>
        <p className="ps-body">
          Advertising partners such as <strong>Google AdMob</strong> may collect information as described above.
        </p>

        <div className="ps-sub">6.3 With Legal Authorities</div>
        <p className="ps-body">Information may be disclosed if required by:</p>
        <ul className="ps-ul">
          <li>Law</li>
          <li>Court order</li>
          <li>Government request</li>
        </ul>

        <div className="ps-sub">6.4 Business Protection</div>
        <p className="ps-body">
          To protect Serwise, its users, and the public from fraud, abuse, or illegal activity.
        </p>
        <div className="ps-note">
          We do <strong>NOT sell or rent personal data</strong> to third parties.
        </div>
      </section>

      {/* 7. Chat */}
      <section className="ps">
        <div className="ps-num">Section 07</div>
        <h2 className="ps-title">Chat &amp; Communication Data</h2>
        <p className="ps-body">
          The Platform provides an in-app chat feature for service-related communication.
        </p>
        <ul className="ps-ul">
          <li>Chat messages are used only to facilitate services</li>
          <li>Chats are not monitored in real time</li>
          <li>Serwise may review chats for dispute resolution, fraud prevention, misuse detection, or legal compliance</li>
        </ul>
      </section>

      {/* 8. Storage & Security */}
      <section className="ps">
        <div className="ps-num">Section 08</div>
        <h2 className="ps-title">Data Storage &amp; Security</h2>
        <p className="ps-body">
          Serwise implements reasonable technical and organizational safeguards to protect your data against:
        </p>
        <ul className="ps-ul">
          <li>Unauthorized access</li>
          <li>Loss or misuse</li>
          <li>Alteration or disclosure</li>
        </ul>
        <div className="ps-note">
          However, no system is completely secure, and absolute security cannot be guaranteed.
        </div>
      </section>

      {/* 9. Retention */}
      <section className="ps">
        <div className="ps-num">Section 09</div>
        <h2 className="ps-title">Data Retention</h2>
        <p className="ps-body">We retain personal information:</p>
        <ul className="ps-ul">
          <li>As long as your account remains active</li>
          <li>As required to provide services</li>
          <li>As required by law, accounting, or regulatory obligations</li>
        </ul>
        <p className="ps-body">
          You may request account deletion, subject to mandatory legal retention requirements.
        </p>
      </section>

      {/* 10. User Rights */}
      <section className="ps">
        <div className="ps-num">Section 10</div>
        <h2 className="ps-title">User Rights &amp; Choices</h2>
        <p className="ps-body">You have the right to:</p>
        <ul className="ps-ul">
          <li>Access your personal data</li>
          <li>Correct or update inaccurate information</li>
          <li>Request account deletion</li>
          <li>Withdraw consent (where applicable)</li>
          <li>Control ad personalization through device settings</li>
        </ul>
        <p className="ps-body">Requests can be made using the contact details below.</p>
      </section>

      {/* 11. Cookies */}
      <section className="ps">
        <div className="ps-num">Section 11</div>
        <h2 className="ps-title">Cookies &amp; Tracking Technologies</h2>
        <p className="ps-body">The Platform may use cookies or similar technologies for:</p>
        <ul className="ps-ul">
          <li>App functionality</li>
          <li>Analytics</li>
          <li>Advertising</li>
        </ul>
        <p className="ps-body">
          You may control cookies or ad tracking through your device or app settings.
        </p>
      </section>

      {/* 12. Third-party */}
      <section className="ps">
        <div className="ps-num">Section 12</div>
        <h2 className="ps-title">Third-Party Services</h2>
        <p className="ps-body">
          The Platform may contain links or integrations with third-party services.
        </p>
        <p className="ps-body">
          Serwise is <strong>not responsible</strong> for the privacy practices of third parties.
        </p>
      </section>

      {/* 13. Children */}
      <section className="ps">
        <div className="ps-num">Section 13</div>
        <h2 className="ps-title">Children's Privacy</h2>
        <p className="ps-body">Serwise is not intended for users under 18 years of age.</p>
        <p className="ps-body">
          We do not knowingly collect data from minors. Any such data will be deleted if identified.
        </p>
      </section>

      {/* 14. Changes */}
      <section className="ps">
        <div className="ps-num">Section 14</div>
        <h2 className="ps-title">Changes to This Privacy Policy</h2>
        <p className="ps-body">We may update this Privacy Policy periodically.</p>
        <p className="ps-body">
          Updates will be posted on the Platform with a revised "Last Updated" date.
        </p>
        <p className="ps-body">Continued use of the Platform indicates acceptance of the updated policy.</p>
      </section>

      {/* 15. Contact */}
      <section className="ps">
        <div className="ps-num">Section 15</div>
        <h2 className="ps-title">Contact Information</h2>
        <p className="ps-body">For privacy-related questions, requests, or complaints, contact:</p>
        <ul className="ps-ul">
          <li><strong>Platform Operator:</strong> Monil Dineshkumar Shah</li>
          <li><strong>Business Name:</strong> Serwise</li>
          <li><strong>Email:</strong> shahmonil.1201@gmail.com</li>
          <li><strong>Location:</strong> Surat, Gujarat, India – 395017</li>
        </ul>
      </section>

      {/* 16. Consent */}
      <section className="ps">
        <div className="ps-num">Section 16</div>
        <h2 className="ps-title">Consent</h2>
        <div className="ps-note">
          By using the Serwise Platform, you acknowledge that you have read, understood, and agreed to this Privacy Policy and
          consent to the collection and processing of your information as described herein.
        </div>
      </section>
    </PolicyLayout>
  );
}
