import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serwise — Home Appliance Service, Simplified",
  description:
    "Serwise brings professional home appliance repair & maintenance to your doorstep. Join the waitlist and be first to experience hassle-free service.",
  openGraph: {
    title: "Serwise — Home Appliance Service, Simplified",
    description: "Join the Serwise waitlist. Launch coming soon.",
    siteName: "Serwise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
