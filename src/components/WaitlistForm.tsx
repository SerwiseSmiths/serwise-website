"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length < 10) {
      setStatus("error");
      setMessage("Enter a valid 10-digit phone number");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNo: cleaned, countryCode: "+91" }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message ?? "You're on the waitlist!");
        setPhone("");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="wl-form">
        {/* ── Pill container ── */}
        <div className="wl-pill">
          {/* Left side: phone icon + input (Frame 20598) */}
          <div className="wl-left">
            <svg
              className="wl-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <input
              type="tel"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => { setStatus("idle"); setPhone(e.target.value); }}
              maxLength={15}
              className="wl-input"
              disabled={status === "loading" || status === "success"}
            />
          </div>

          {/* Right side: submit button (Frame 20597) */}
          <button
            type="submit"
            className="wl-btn"
            disabled={status === "loading" || status === "success"}
          >
            <span className="wl-btn-text">
              {status === "loading" ? "Joining…" : status === "success" ? "Joined ✓" : "Join the waitlist"}
            </span>
          </button>
        </div>
      </form>

      {/* Feedback — shown below the pill */}
      {message && (
        <p className="wl-feedback" style={{ color: status === "error" ? "#ff4d4d" : "#1a1a1a" }}>
          {message}
        </p>
      )}

      <style>{`
        /* ── Desktop (≥ 769px) — Figma: Frame 20602 = 390×50 ── */
        @media (min-width: 769px) {
          .wl-form   { display: flex; flex-direction: column; align-items: flex-start; }

          /* Frame 20602: 390×50, padding:5px 10px, gap:11px */
          .wl-pill {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 5px 10px;
            gap: 11px;
            width: 390px;
            height: 50px;
            background: #000000;
            border-radius: 500px;
          }

          /* Frame 20598: 231×40 */
          .wl-left {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px 10px 10px 5px;
            gap: 10px;
            width: 231px;
            height: 40px;
            border-radius: 500px;
            flex: none;
            flex-shrink: 0;
          }

          .wl-icon { width: 16px; height: 16px; flex-shrink: 0; }

          /* "Enter Phone Number" text style */
          .wl-input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: -0.03em;
            color: #FFFFFF;
            min-width: 0;
          }
          .wl-input::placeholder { color: rgba(255,255,255,0.6); }

          /* Frame 20597: 132×40 */
          .wl-btn {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px;
            gap: 10px;
            width: 132px;
            height: 40px;
            background: #FFFFFF;
            border-radius: 58px;
            border: none;
            cursor: pointer;
            flex-shrink: 0;
            transition: opacity 0.2s;
          }
          .wl-btn:disabled { opacity: 0.7; cursor: not-allowed; }

          .wl-btn-text {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: -0.03em;
            color: #000000;
            white-space: nowrap;
          }

          .wl-feedback {
            margin-top: 8px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 12px;
            letter-spacing: -0.03em;
          }
        }

        /* ── Mobile (≤ 768px) — Figma: Frame 20602 = 190.57×24.43 ── */
        @media (max-width: 768px) {
          .wl-form   { display: flex; flex-direction: column; align-items: flex-start; }

          /* Frame 20602 mobile: 190.57×24.43, padding:2.44px 4.89px, gap:5.38px */
          .wl-pill {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 2.44318px 4.88637px;
            gap: 5.38px;
            width: 190.57px;
            height: 24.43px;
            background: #000000;
            border-radius: 244.318px;
          }

          /* Frame 20598 mobile: 112.88×19.77 */
          .wl-left {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 4.89px 4.89px 4.89px 2.44px;
            gap: 4.89px;
            width: 112.88px;
            height: 19.77px;
            border-radius: 244.318px;
            flex: none;
            flex-shrink: 0;
            overflow: hidden;
          }

          .wl-icon { width: 8px; height: 8px; flex-shrink: 0; }

          .wl-input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 7.33px;
            line-height: 10px;
            letter-spacing: -0.03em;
            color: #FFFFFF;
            min-width: 0;
          }
          .wl-input::placeholder { color: rgba(255,255,255,0.6); font-size: 7px; }

          /* Frame 20597 mobile: 64.5×19.55 */
          .wl-btn {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 4.89px;
            gap: 4.89px;
            width: 64.5px;
            height: 19.55px;
            background: #FFFFFF;
            border-radius: 28.34px;
            border: none;
            cursor: pointer;
            flex-shrink: 0;
            transition: opacity 0.2s;
          }
          .wl-btn:disabled { opacity: 0.7; cursor: not-allowed; }

          .wl-btn-text {
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 7.33px;
            line-height: 10px;
            letter-spacing: -0.03em;
            color: #000000;
            white-space: nowrap;
          }

          .wl-feedback {
            margin-top: 4px;
            font-family: 'DM Sans', sans-serif;
            font-weight: 600;
            font-size: 7px;
            letter-spacing: -0.03em;
          }
        }
      `}</style>
    </>
  );
}
