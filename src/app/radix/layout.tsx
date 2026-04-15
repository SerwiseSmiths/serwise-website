import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Radix — Professional Home Services Platform",
  description:
    "Radix by Radix Technologies — a professional platform connecting skilled service providers with customers for home appliance repair & maintenance.",
  openGraph: {
    title: "Radix — Professional Home Services Platform",
    description: "Radix by Radix Technologies. Download the app today.",
    siteName: "Radix",
  },
};

export default function RadixLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
