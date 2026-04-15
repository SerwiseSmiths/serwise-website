import Image from "next/image";
import Link from "next/link";

const MARQUEE_ITEMS = Array(14).fill("RADIX — PROFESSIONAL HOME SERVICES");

export default function RadixHome() {
  return (
    <main className="canvas">

      {/* ── 1. Background image ───────────────────────────────────────────── */}
      <div className="bg-image" />

      {/* ── 2. Logo ──────────────────────────────────────────────────────── */}
      <div className="logo-wrap">
        <Image
          src="/radix-logo.png"
          alt="Radix"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* ── 3. Download the App button ──────────────────────────────────── */}
      <div className="download-btn-outer">
        <div className="download-btn-inner">
          <span className="download-btn-text">Download the App</span>
        </div>
      </div>

      {/* ── 4. App preview ──────────────────────────────────────────────── */}
      <div className="artboard-wrap">
        <Image
          src="/app-preview.png"
          alt="Radix App"
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          priority
        />
      </div>

      {/* ── 5. Marquee strip ─────────────────────────────────────────────── */}
      <div className="marquee-strip" aria-label="Radix app">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((txt, i) => (
            <span key={i} className="marquee-item">
              {txt}
            </span>
          ))}
        </div>
      </div>

      {/* ── 6. Footer links ──────────────────────────────────────────────── */}
      <footer className="footer">
        <Link href="/radix/terms"          className="footer-link">Terms &amp; Conditions</Link>
        <Link href="/radix/privacy"        className="footer-link">Privacy Policy</Link>
        <Link href="/radix/refund"         className="footer-link">Refund Policy</Link>
        <Link href="/radix/delete-account" className="footer-link">Delete Account</Link>
        <Link href="/radix/contact"        className="footer-link">Contact Us</Link>
      </footer>

      {/* ── Styles ───────────────────────────────────────────────────────── */}
      <style>{`

        /* ════════════════════════════════
           SHARED / BASE
        ════════════════════════════════ */
        .canvas {
          position: relative;
          width: 100%;
          background: #000000;
          overflow-x: hidden;
          overflow-y: visible;
        }

        /* ════════════════════════════════
           DESKTOP  (≥ 769 px)
        ════════════════════════════════ */
        @media (min-width: 769px) {

          .canvas {
            min-height: 100dvh;
          }

          .bg-image {
            position: absolute;
            width: 125vw;
            height: 100dvh;
            left: -12.5vw;
            top: 0;
            background: url('/bg.png') center / cover no-repeat;
            z-index: 0;
          }

          .logo-wrap {
            position: absolute;
            width: 5.42vw;
            height: 5.42vw;
            left: 5.42vw;
            top: 6.56vh;
            z-index: 10;
            border-radius: 1vw;
            box-shadow: 0 0.3vw 1.2vw rgba(0,0,0,0.45);
            overflow: hidden;
          }

          .download-btn-outer {
            position: absolute;
            width: 16.04vw;
            height: 8.67vh;
            left: 76.88vw;
            top: 6.56vh;
            z-index: 10;
            border-radius: 0.14vw;
            background: #ffffff;
          }

          .download-btn-inner {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0) 47.67%, rgba(0,0,0,0.2) 100%), #FFFFFF;
            box-shadow: 0.14vw 0.21vw 0px 0.63vw #000000;
            border-radius: 0.35vw;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .download-btn-text {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 1.74vw;
            line-height: 1;
            letter-spacing: -0.03em;
            color: #000000;
          }

          .artboard-wrap {
            position: absolute;
            width: 49.38vw;
            height: 39.11vh;
            left: calc(50% - 24.69vw);
            top: 40.33vh;
            z-index: 5;
          }

          .marquee-strip {
            position: absolute;
            left: 0;
            width: 100%;
            height: 4.44vh;
            top: 84.89vh;
            z-index: 10;
            background: #BDBDBD;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .footer {
            position: absolute;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4.1vw;
            width: auto;
            left: 50%;
            transform: translateX(-50%);
            top: 93.89vh;
            z-index: 10;
          }

          .footer-link {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: clamp(11px, 1.04vw, 16px);
            line-height: 1;
            letter-spacing: -0.03em;
            color: #000000;
            text-decoration: none;
            white-space: nowrap;
          }

          .footer-link:hover { text-decoration: underline; }
        }

        /* ════════════════════════════════
           MOBILE  (≤ 768 px)
        ════════════════════════════════ */
        @media (max-width: 768px) {

          .canvas {
            min-height: 926px;
          }

          .bg-image {
            position: absolute;
            width: 1257.47px;
            height: 926.01px;
            left: -418px;
            top: 0;
            background: url('/bg.png') center / cover no-repeat;
            z-index: 0;
          }

          .logo-wrap {
            position: absolute;
            width: 55.56px;
            height: 55.56px;
            left: 33px;
            top: 69px;
            z-index: 10;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.45);
            overflow: hidden;
          }

          .download-btn-outer {
            position: absolute;
            width: 164.55px;
            height: 55.56px;
            left: 224px;
            top: 69px;
            z-index: 10;
            border-radius: 1.42px;
            background: #ffffff;
          }

          .download-btn-inner {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0) 47.67%, rgba(0,0,0,0.2) 100%), #FFFFFF;
            box-shadow: 1.42px 2.14px 0px 6.41px #000000;
            border-radius: 3.56px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .download-btn-text {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 17.81px;
            line-height: 23px;
            letter-spacing: -0.03em;
            color: #000000;
          }

          .artboard-wrap {
            position: absolute;
            width: 347.42px;
            height: 172px;
            left: 39.79px;
            top: 544px;
            z-index: 5;
          }

          .marquee-strip {
            position: absolute;
            left: 0;
            width: 100%;
            height: 40px;
            top: 764px;
            z-index: 10;
            background: #BDBDBD;
            display: flex;
            align-items: center;
            overflow: hidden;
          }

          .footer {
            position: absolute;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 37.31px;
            width: 364.93px;
            left: calc(50% - 364.93px / 2 + 0.62px);
            top: 855.64px;
            z-index: 10;
          }

          .footer-link {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 9.49px;
            line-height: 12px;
            letter-spacing: -0.03em;
            color: #000000;
            text-decoration: none;
            white-space: nowrap;
          }

          .footer-link:hover { text-decoration: underline; }
        }

        /* ── Marquee animation (shared) ── */
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .marquee-item {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          line-height: 20px;
          color: #000000;
          white-space: nowrap;
          padding: 0 29.5px;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
