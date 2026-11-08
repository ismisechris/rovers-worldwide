import Image from "next/image";

export default function HomePage() {
  return (
    <main className="landing-page" id="main-content">
      <figure className="home-banner">
        <Image
          src="/assets/images/srfc_banner.jpg"
          alt="Sligo Rovers International Supporters Club"
          fill
          priority
          sizes="100vw"
        />
      </figure>

      <div className="page-shell" id="home">
        <section className="home-intro" aria-labelledby="home-title">
          <div className="home-copy">
            <span className="eyebrow">THE PEOPLE&apos;S CLUB</span>
            <h1 id="home-title">
              ROVERS, <span>WORLDWIDE.</span>
            </h1>
            <p>
              From Liverpool to Tenerife, Philadelphia to Buenos Aires, and Auckland to Los Angeles... tied together by Sligo and its Rovers
            </p>
          </div>
          <aside className="home-note" aria-label="Our club">
            <span className="eyebrow">EST. 1928</span>
            <strong>
              ONE CLUB.
              <br />
              EVERY CORNER.
            </strong>
            <span>Nah nah nah nah...</span>
          </aside>
        </section>
      </div>
    </main>
  );
}
