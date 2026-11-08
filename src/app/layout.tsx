import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "SRFC Int'l Supporters Club",
  description:
    "Sligo Rovers F.C. International Supporters club community. Become a member of the Peoples' Club",
};

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="topline">
          <div className="topline-inner">
            <span>
              <span className="live-dot" aria-hidden="true" />
              ROVERS WORLDWIDE
            </span>
            <span className="topline-location">SLIGO ROVERS INTERNATIONAL · EST. 1928</span>
          </div>
        </div>
        <SiteHeader />
        {children}
        <footer className="site-footer">
          <Link className="footer-brand" href="/">
            SLIGO ROVERS <span>·</span> EVEN IF THE SUN CEASES TO SHINE...
          </Link>
          <span>SLIGO ROVERS INTERNATIONAL SUPPORTERS CLUB · EST. 2024</span>
          <a href="#main-content">BACK TO TOP ↑</a>
        </footer>
      </body>
    </html>
  );
}
