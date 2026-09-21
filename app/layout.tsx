import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loans in Kenya From KES 50,000 to KES 10 Million | FinCap Kenya",
  description: "Explore title deed and logbook secured financing options in Kenya and connect directly with a loan representative through WhatsApp.",
  openGraph: { title: "FinCap Kenya | Secured Financing Options", description: "Explore title deed and logbook financing options in Kenya.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
