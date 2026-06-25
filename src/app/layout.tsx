import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Joint & Knee Pain Relief Canton MI | $49 Consultation | Vital Flow Wellness",
  description:
    "Get a complete joint pain consultation in Canton, MI for just $49, includes exam, X-rays, doctor's report, and a FREE laser treatment. PRP & stem cell therapy specialists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans pb-[88px] lg:pb-0">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
