import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Radix",
  description:
    "Get in touch with the Radix team. We're here to help with service queries, support, and feedback.",
};

export default function RadixContactPage() {
  return (
    <>
      <div className="contact-root">

        {/* ── Nav ── */}
        <nav className="contact-nav">
          <Link href="/radix" className="contact-nav-logo">
            <div className="contact-logo-img">
              <Image src="/radix-logo.png" alt="Radix" fill style={{ objectFit: "cover" }} />
            </div>
            <span className="contact-nav-brand">RADIX</span>
          </Link>
          <Link href="/radix" className="contact-back-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>
        </nav>

        {/* ── Hero ── */}
        <header className="contact-hero">
          <div className="contact-hero-tag">Get in Touch</div>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-sub">
            Have a question, complaint, or just want to say hello?<br />
            We&apos;re a small team and we read every message.
          </p>
        </header>

        {/* ── Main grid ── */}
        <main className="contact-main">

          {/* ── Left: info cards ── */}
          <div className="contact-cards">

            {/* Email */}
            <a href="mailto:shahmonil.1201@gmail.com" className="contact-card contact-card--link">
              <div className="contact-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="contact-card-body">
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">shahmonil.1201@gmail.com</div>
                <div className="contact-card-sub">We reply within 24–48 hours</div>
              </div>
              <div className="contact-card-arrow">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* Location */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-body">
                <div className="contact-card-label">Location</div>
                <div className="contact-card-value">Surat, Gujarat</div>
                <div className="contact-card-sub">India — 395017</div>
              </div>
            </div>

            {/* Business */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
              <div className="contact-card-body">
                <div className="contact-card-label">Business</div>
                <div className="contact-card-value">Radix Technologies</div>
                <div className="contact-card-sub">Radix App Platform</div>
              </div>
            </div>
          </div>

          {/* ── Right: message box ── */}
          <div className="contact-form-wrap">
            <div className="contact-form-header">
              <h2 className="contact-form-title">Send us a message</h2>
              <p className="contact-form-hint">
                For the fastest response, email us directly. This form is also a quick way to reach out.
              </p>
            </div>

            <form
              action={`mailto:shahmonil.1201@gmail.com`}
              method="get"
              encType="text/plain"
              className="contact-form"
            >
              <div className="cf-row cf-row--2">
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-radix-name">Your Name</label>
                  <input
                    className="cf-input"
                    id="cf-radix-name"
                    name="name"
                    type="text"
                    placeholder="Rahul Mehta"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-radix-email">Email Address</label>
                  <input
                    className="cf-input"
                    id="cf-radix-email"
                    name="email"
                    type="email"
                    placeholder="rahul@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-radix-subject">Subject</label>
                <select className="cf-input cf-select" id="cf-radix-subject" name="subject">
                  <option value="">Select a topic...</option>
                  <option value="Service Inquiry">Service Inquiry</option>
                  <option value="Booking Issue">Booking Issue</option>
                  <option value="Refund Request">Refund Request</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Partnership / Business">Partnership / Business</option>
                  <option value="General Feedback">General Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="cf-field">
                <label className="cf-label" htmlFor="cf-radix-message">Message</label>
                <textarea
                  className="cf-input cf-textarea"
                  id="cf-radix-message"
                  name="body"
                  placeholder="Describe your issue or question in detail..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" id="cf-radix-submit" className="cf-submit">
                <span>Send Message</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                </svg>
              </button>
            </form>

            <p className="contact-form-footer-note">
              Alternatively, email us at{" "}
              <a href="mailto:shahmonil.1201@gmail.com" className="contact-email-link">
                shahmonil.1201@gmail.com
              </a>
            </p>
          </div>
        </main>

        {/* ── Response time banner ── */}
        <div className="contact-banner">
          <div className="contact-banner-inner">
            <div className="contact-banner-item">
              <span className="contact-banner-num">24–48h</span>
              <span className="contact-banner-txt">Email Response Time</span>
            </div>
            <div className="contact-banner-div" />
            <div className="contact-banner-item">
              <span className="contact-banner-num">Surat, India</span>
              <span className="contact-banner-txt">IST (UTC +5:30)</span>
            </div>
            <div className="contact-banner-div" />
            <div className="contact-banner-item">
              <span className="contact-banner-num">Mon–Sat</span>
              <span className="contact-banner-txt">Working Days</span>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="contact-footer">
          <div className="contact-footer-inner">
            <div className="contact-footer-brand">
              <div className="contact-footer-logo">
                <Image src="/logo.png" alt="Radix" fill style={{ objectFit: "cover" }} />
              </div>
              <span>© {new Date().getFullYear()} Radix Technologies. All rights reserved.</span>
            </div>
            <nav className="contact-footer-links">
              <Link href="/radix/terms" className="contact-footer-link">Terms &amp; Conditions</Link>
              <Link href="/radix/privacy" className="contact-footer-link">Privacy Policy</Link>
              <Link href="/radix/refund" className="contact-footer-link">Refund Policy</Link>
              <Link href="/radix/delete-account" className="contact-footer-link">Delete Account</Link>
              <Link href="/radix/contact" className="contact-footer-link">Contact Us</Link>
            </nav>
          </div>
        </footer>
      </div>

      <style>{`
        /* ── Root ── */
        .contact-root {
          min-height: 100vh;
          background: #0A0A0A;
          font-family: 'DM Sans', sans-serif;
          color: #888;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
        }

        /* ── Nav ── */
        .contact-nav {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(20px, 5vw, 80px);
          height: 64px;
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #1C1C1C;
        }

        .contact-nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .contact-logo-img {
          position: relative;
          width: 34px;
          height: 34px;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 0 0 1px #333;
        }

        .contact-nav-brand {
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.12em;
          color: #FFFFFF;
        }

        .contact-back-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #555;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-back-btn:hover { color: #FFFFFF; }

        /* ── Hero ── */
        .contact-hero {
          padding: clamp(56px, 9vh, 100px) clamp(20px, 5vw, 80px) clamp(40px, 6vh, 72px);
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
        }

        .contact-hero-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          background: #161616;
          border: 1px solid #222;
          padding: 4px 12px;
          border-radius: 100px;
          margin-bottom: 24px;
        }

        .contact-hero-title {
          font-size: clamp(40px, 7vw, 80px);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.04em;
          color: #FFFFFF;
          margin-bottom: 18px;
        }

        .contact-hero-sub {
          font-size: clamp(14px, 1.5vw, 17px);
          line-height: 1.7;
          color: #555;
          max-width: 480px;
        }

        /* ── Main grid ── */
        .contact-main {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(24px, 4vw, 64px);
          max-width: 1100px;
          margin: 0 auto;
          width: 100%;
          padding: 0 clamp(20px, 5vw, 80px) clamp(60px, 8vh, 100px);
          align-items: start;
        }

        @media (max-width: 768px) {
          .contact-main {
            grid-template-columns: 1fr;
          }
        }

        /* ── Info cards ── */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px;
          background: #0F0F0F;
          border: 1px solid #1A1A1A;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: border-color 0.2s, background 0.2s;
          position: relative;
        }

        .contact-card--link:hover {
          border-color: #2A2A2A;
          background: #141414;
        }

        .contact-card-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #161616;
          border: 1px solid #222;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          flex-shrink: 0;
        }

        .contact-card--link:hover .contact-card-icon {
          color: #888;
        }

        .contact-card-body {
          flex: 1;
          min-width: 0;
        }

        .contact-card-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #3A3A3A;
          margin-bottom: 5px;
        }

        .contact-card-value {
          font-size: 15px;
          font-weight: 600;
          color: #CCCCCC;
          letter-spacing: -0.01em;
          word-break: break-all;
        }

        .contact-card-sub {
          font-size: 12px;
          color: #444;
          margin-top: 3px;
        }

        .contact-card-arrow {
          color: #333;
          flex-shrink: 0;
          margin-top: 2px;
          transition: color 0.2s;
        }

        .contact-card--link:hover .contact-card-arrow { color: #666; }

        /* ── Form ── */
        .contact-form-wrap {
          background: #0F0F0F;
          border: 1px solid #1A1A1A;
          border-radius: 16px;
          padding: clamp(24px, 3vw, 40px);
        }

        .contact-form-header {
          margin-bottom: 28px;
          padding-bottom: 24px;
          border-bottom: 1px solid #161616;
        }

        .contact-form-title {
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .contact-form-hint {
          font-size: 13px;
          line-height: 1.6;
          color: #444;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .cf-row {
          display: flex;
          gap: 14px;
        }

        .cf-row--2 > * { flex: 1; min-width: 0; }

        @media (max-width: 560px) {
          .cf-row--2 { flex-direction: column; }
        }

        .cf-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .cf-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #444;
          text-transform: uppercase;
        }

        .cf-input {
          background: #0A0A0A;
          border: 1px solid #1E1E1E;
          border-radius: 8px;
          padding: 12px 14px;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          color: #CCCCCC;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }

        .cf-input::placeholder { color: #333; }

        .cf-input:focus {
          border-color: #333;
        }

        .cf-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23444' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }

        .cf-textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.6;
        }

        .cf-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          padding: 14px 24px;
          background: #FFFFFF;
          color: #000000;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s, transform 0.1s;
          margin-top: 4px;
        }

        .cf-submit:hover { background: #E8E8E8; }
        .cf-submit:active { transform: scale(0.99); }

        .contact-form-footer-note {
          margin-top: 16px;
          font-size: 12px;
          color: #333;
          text-align: center;
        }

        .contact-email-link {
          color: #555;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-email-link:hover { color: #AAAAAA; }

        /* ── Banner ── */
        .contact-banner {
          border-top: 1px solid #141414;
          border-bottom: 1px solid #141414;
          background: #080808;
          padding: clamp(20px, 3vh, 32px) clamp(20px, 5vw, 80px);
        }

        .contact-banner-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(24px, 6vw, 80px);
          flex-wrap: wrap;
        }

        .contact-banner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .contact-banner-num {
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.03em;
        }

        .contact-banner-txt {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #333;
        }

        .contact-banner-div {
          width: 1px;
          height: 32px;
          background: #1E1E1E;
        }

        @media (max-width: 500px) {
          .contact-banner-div { display: none; }
        }

        /* ── Footer ── */
        .contact-footer {
          border-top: 1px solid #161616;
          padding: 32px clamp(20px, 5vw, 80px);
          background: #060606;
        }

        .contact-footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .contact-footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #333;
        }

        .contact-footer-logo {
          position: relative;
          width: 22px;
          height: 22px;
          border-radius: 4px;
          overflow: hidden;
          opacity: 0.5;
        }

        .contact-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .contact-footer-link {
          font-size: 12px;
          font-weight: 500;
          color: #444;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }

        .contact-footer-link:hover { color: #AAAAAA; }

        @media (max-width: 600px) {
          .contact-footer-inner { flex-direction: column; align-items: flex-start; }
          .contact-footer-links { gap: 16px; }
        }
      `}</style>
    </>
  );
}
