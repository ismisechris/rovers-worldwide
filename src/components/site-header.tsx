import Image from "next/image";
import Link from "next/link";
import SiteNavigation from "@/components/site-navigation";

export default function SiteHeader() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Rovers Worldwide home">
          <Image
            className="brand-crest"
            src="/assets/images/Sligo-Rovers-Logo.png"
            alt=""
            width={48}
            height={48}
          />
          <span className="brand-copy">
            <strong>SLIGO ROVERS F.C.</strong>
            <small>INTERNATIONAL SUPPORTERS CLUB</small>
          </span>
        </Link>
        <span className="header-note">THE BIT O&apos; RED</span>
      </header>
      <SiteNavigation />
    </>
  );
}
