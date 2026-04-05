import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface PolicyLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function PolicyLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: PolicyLayoutProps) {
  return (
    <>
      <div className="policy-root">
        {/* ── Sticky Nav ── */}
        <nav className="policy-nav">
          <Link href="/" className="policy-nav-logo">
            <div className="policy-logo-img">
              <Image src="/logo.png" alt="Serwise" fill style={{ objectFit: "cover" }} />
            </div>
            <span className="policy-nav-brand">SERWISE</span>
          </Link>
          <Link href="/" className="policy-back-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
        </nav>

        {/* ── Hero ── */}
        <header className="policy-hero">
          <div className="policy-hero-inner">
            <div className="policy-hero-tag">Legal Document</div>
            <h1 className="policy-hero-title">{title}</h1>
            {subtitle && <p className="policy-hero-subtitle">{subtitle}</p>}
            <div className="policy-hero-meta">
              <span className="policy-meta-brand">SERWISE</span>
              <span className="policy-meta-dot" />
              <span className="policy-meta-date">Last Updated: {lastUpdated}</span>
            </div>
          </div>
          <div className="policy-hero-line" />
        </header>

        {/* ── Content ── */}
        <main className="policy-content">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="policy-footer">
          <div className="policy-footer-inner">
            <div className="policy-footer-brand">
              <div className="policy-footer-logo">
                <Image src="/logo.png" alt="Serwise" fill style={{ objectFit: "cover" }} />
              </div>
              <span>© {new Date().getFullYear()} Serwise. All rights reserved.</span>
            </div>
            <nav className="policy-footer-links">
              <Link href="/terms"   className="policy-footer-link">Terms &amp; Conditions</Link>
              <Link href="/privacy" className="policy-footer-link">Privacy Policy</Link>
              <Link href="/refund"  className="policy-footer-link">Refund Policy</Link>
              <Link href="/contact" className="policy-footer-link">Contact Us</Link>
            </nav>
          </div>
        </footer>
      </div>

      <style>{`
        /* ── Root ── */
        .policy-root {
          min-height: 100vh;
          background: #0A0A0A;
          font-family: 'DM Sans', sans-serif;
          color: #AAAAAA;
          overflow-x: hidden;
        }

        /* ── Nav ── */
        .policy-nav {
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

        .policy-nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .policy-logo-img {
          position: relative;
          width: 34px;
          height: 34px;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 0 0 1px #333;
        }

        .policy-nav-brand {
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.12em;
          color: #FFFFFF;
        }

        .policy-back-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #666;
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }

        .policy-back-btn:hover { color: #FFFFFF; }

        /* ── Hero ── */
        .policy-hero {
          padding: clamp(48px, 8vh, 96px) clamp(20px, 5vw, 80px) 0;
          max-width: 900px;
          margin: 0 auto;
        }

        .policy-hero-inner {
          padding-bottom: clamp(32px, 5vh, 60px);
        }

        .policy-hero-tag {
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

        .policy-hero-title {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          margin-bottom: 16px;
        }

        .policy-hero-subtitle {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 28px;
          max-width: 600px;
        }

        .policy-hero-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .policy-meta-brand {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #444;
        }

        .policy-meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #333;
        }

        .policy-meta-date {
          font-size: 12px;
          color: #444;
          letter-spacing: 0.02em;
        }

        .policy-hero-line {
          height: 1px;
          background: linear-gradient(90deg, #222 0%, #333 40%, #222 100%);
          margin-top: 0;
        }

        /* ── Content ── */
        .policy-content {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(40px, 6vh, 80px) clamp(20px, 5vw, 80px) clamp(60px, 10vh, 120px);
        }

        /* ── Policy section building blocks ── */
        .ps {
          padding: clamp(28px, 4vh, 48px) 0;
          border-bottom: 1px solid #161616;
        }

        .ps:last-child { border-bottom: none; }

        .ps-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #333;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .ps-title {
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .ps-sub {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #555;
          text-transform: uppercase;
          margin-top: 24px;
          margin-bottom: 10px;
        }

        .ps-body {
          font-size: clamp(13px, 1.4vw, 15px);
          line-height: 1.8;
          color: #888;
          margin-bottom: 12px;
        }

        .ps-body strong {
          color: #CCCCCC;
          font-weight: 600;
        }

        .ps-ul {
          list-style: none;
          padding: 0;
          margin: 8px 0 12px 0;
        }

        .ps-ul li {
          position: relative;
          padding-left: 18px;
          font-size: clamp(13px, 1.4vw, 15px);
          line-height: 1.8;
          color: #777;
          margin-bottom: 4px;
        }

        .ps-ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.75em;
          width: 5px;
          height: 1px;
          background: #444;
        }

        .ps-ul li strong {
          color: #BBBBBB;
          font-weight: 600;
        }

        .ps-note {
          margin-top: 16px;
          padding: 14px 18px;
          background: #111111;
          border-left: 2px solid #2A2A2A;
          border-radius: 0 6px 6px 0;
          font-size: 13px;
          line-height: 1.7;
          color: #666;
        }

        .ps-note strong {
          color: #AAAAAA;
        }

        .ps-warning {
          margin-top: 16px;
          padding: 14px 18px;
          background: #110E0E;
          border-left: 2px solid #3A1A1A;
          border-radius: 0 6px 6px 0;
          font-size: 13px;
          line-height: 1.7;
          color: #664444;
        }

        .ps-warning strong {
          color: #AA6666;
        }

        /* ── Footer ── */
        .policy-footer {
          border-top: 1px solid #161616;
          padding: 32px clamp(20px, 5vw, 80px);
          background: #060606;
        }

        .policy-footer-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .policy-footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #333;
        }

        .policy-footer-logo {
          position: relative;
          width: 22px;
          height: 22px;
          border-radius: 4px;
          overflow: hidden;
          opacity: 0.5;
        }

        .policy-footer-links {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }

        .policy-footer-link {
          font-size: 12px;
          font-weight: 500;
          color: #444;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }

        .policy-footer-link:hover { color: #AAAAAA; }

        @media (max-width: 600px) {
          .policy-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .policy-footer-links { gap: 16px; }
        }
      `}</style>
    </>
  );
}
