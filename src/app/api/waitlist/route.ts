import { NextRequest, NextResponse } from "next/server";
import { BACKEND_API_URL } from "@/config/env.config";

const BACKEND_URL = BACKEND_API_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phoneNo, countryCode = "+91" } = body;

    if (!phoneNo || typeof phoneNo !== "string") {
      return NextResponse.json(
        { message: "A valid phone number is required" },
        { status: 400 }
      );
    }

    const cleaned = phoneNo.replace(/\D/g, "");
    if (cleaned.length < 10) {
      return NextResponse.json(
        { message: "Please enter a valid 10-digit phone number" },
        { status: 400 }
      );
    }

    const upstream = await fetch(`${BACKEND_URL}/waitlist/join`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNo: cleaned, countryCode, source: "website" }),
    });

    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch (err) {
    console.error("[/api/waitlist] Error:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
