import Image from "next/image";

const conversations = [
  {
    initials: "JM",
    name: "Jamie M.",
    location: "Melbourne, Australia",
    time: "8 min ago",
    topic: "Matchday",
    title: "The early start was worth every minute",
    replies: 24,
    tone: "red",
  },
  {
    initials: "AO",
    name: "Aoife O.",
    location: "Boston, USA",
    time: "32 min ago",
    topic: "Away days",
    title: "Where are we meeting before the next one?",
    replies: 12,
    tone: "gold",
  },
  {
    initials: "RL",
    name: "Rovers London",
    location: "London, England",
    time: "1 hr ago",
    topic: "Supporters",
    title: "New faces always welcome at our watch party",
    replies: 8,
    tone: "green",
  },
];

const articles = [
  {
    category: "SUPPORTER STORIES",
    title: "A red thread that runs around the world",
    location: "From our community",
    image: "/assets/images/stadium-night.svg",
    alt: "Illustrated floodlit football ground at night",
  },
  {
    category: "THE AWAY END",
    title: "Finding home in the crowd, wherever you are",
    location: "The Rovers Worldwide blog",
    image: "/assets/images/stadium-night.svg",
    alt: "Floodlights over a football pitch",
  },
];

const stats = [
  { label: "COUNTRIES REPRESENTED", value: "34" },
  { label: "SUPPORTER GROUPS", value: "18" },
  { label: "ONE CLUB", value: "∞" },
];

export default function DashboardPage() {
  return (
    <main id="main-content">
      <div className="page-shell" id="home">
        <section className="welcome-row" aria-labelledby="welcome-title">
          <div>
            <span className="eyebrow">THE PEOPLES&apos; CLUB</span>
            <h1 id="welcome-title">
              ROVERS, <span>WORLDWIDE.</span>
            </h1>
          </div>
        </section>

        <section className="feature-grid" aria-label="Welcome to Rovers Worldwide">
          <article className="feature-card">
            <Image
              className="feature-image"
              src="/assets/images/stadium-night.svg"
              alt="Floodlit football ground beneath a deep red evening sky"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 65vw"
            />
            <div className="feature-shade" />
            <div className="feature-content">
              <span className="feature-tag">
                <span className="live-dot" aria-hidden="true" />
                ONE CLUB. EVERYWHERE.
              </span>
              <h2>
                ALWAYS
                <br />
                ROVERS.
              </h2>
              <p>From the home end to the other side of the world.</p>
              <a href="#connect" className="light-link">
                FIND YOUR ROVERS COMMUNITY <span aria-hidden="true">↗</span>
              </a>
            </div>
            <span className="feature-index" aria-hidden="true">
              01 <i /> 03
            </span>
          </article>

          <article className="welcome-card" id="connect">
            <div className="card-heading">
              <span className="eyebrow">NEVER FAR FROM HOME</span>
              <span className="world-mark" aria-hidden="true">✳</span>
            </div>
            <p className="welcome-card-label">YOUR ROVERS FAMILY IS</p>
            <h2>everywhere.</h2>
            <p className="welcome-card-copy">
              Meet the supporters who make every city feel like home. Find a local group, share a
              matchday, or start a new connection.
            </p>
            <a className="card-action" href="#forum">
              MEET THE COMMUNITY <span aria-hidden="true">→</span>
            </a>
            <div className="welcome-card-footer">
              <span><i /> SUPPORTERS, CONNECTED</span>
              <span>EST. 1928</span>
            </div>
          </article>
        </section>

        <div className="content-grid">
          <div className="main-column">
            <section className="section-block" id="forum" aria-labelledby="forum-title">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">THE PEOPLE’S CLUB</span>
                  <h2 id="forum-title">From the terraces</h2>
                </div>
                <a href="#forum" className="text-link">
                  VISIT THE FORUM <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="forum-tabs" aria-label="Forum topics">
                <span className="selected">All conversations</span>
                <span>Matchday</span>
                <span>Supporters</span>
              </div>
              <div className="discussion-list">
                {conversations.map((conversation) => (
                  <article className="discussion" key={conversation.title}>
                    <div className={`avatar avatar-${conversation.tone}`} aria-hidden="true">
                      {conversation.initials}
                    </div>
                    <div className="discussion-copy">
                      <span>{conversation.topic}</span>
                      <h3><a href="#forum">{conversation.title}</a></h3>
                      <p>
                        {conversation.name} <i>·</i> {conversation.location} <i>·</i>{" "}
                        {conversation.time}
                      </p>
                    </div>
                    <div className="reply-count">
                      <strong>{conversation.replies}</strong>
                      <span>replies</span>
                    </div>
                  </article>
                ))}
              </div>
              <a className="forum-mobile-link" href="#forum">
                JOIN THE CONVERSATION <span aria-hidden="true">↗</span>
              </a>
            </section>

            <section className="section-block blog-section" id="blog" aria-labelledby="blog-title">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">STORIES THAT BRING US TOGETHER</span>
                  <h2 id="blog-title">Notes from the world</h2>
                </div>
                <a href="#blog" className="text-link">
                  ALL STORIES <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="story-grid">
                {articles.map((article) => (
                  <article className="story-card" key={article.title}>
                    <a href="#blog" className="story-image" aria-label={article.title}>
                      <Image src={article.image} alt={article.alt} fill sizes="(max-width: 600px) 100vw, 40vw" />
                      <span className="image-arrow" aria-hidden="true">↗</span>
                    </a>
                    <div className="story-meta">
                      <span>{article.category}</span>
                      <span>{article.location}</span>
                    </div>
                    <h3><a href="#blog">{article.title}</a></h3>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="side-column" aria-label="Rovers Worldwide at a glance">
            <section className="stats-card" id="statistics" aria-labelledby="stats-title">
              <div className="section-heading compact">
                <div>
                  <span className="eyebrow">ONE RED THREAD</span>
                  <h2 id="stats-title">Our world</h2>
                </div>
                <span className="stats-badge">RW</span>
              </div>
              <p className="stats-intro">Different postcodes. The same team.</p>
              <div className="stats-list">
                {stats.map((stat) => (
                  <div className="stat-row" key={stat.label}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
              <a href="#statistics" className="stats-link">
                EXPLORE THE COMMUNITY <span aria-hidden="true">↗</span>
              </a>
            </section>

            <a className="community-banner" href="#connect">
              <span className="community-icon" aria-hidden="true">✳</span>
              <span>
                <strong>WE ARE ROVERS.</strong>
                <small>One family, no matter the distance.</small>
              </span>
              <span className="community-arrow" aria-hidden="true">↗</span>
            </a>

            <section className="join-card" aria-labelledby="join-title">
              <span className="eyebrow">PULL UP A SEAT</span>
              <h2 id="join-title">There’s room for you.</h2>
              <p>Say hello, share your story, and make this community yours.</p>
              <a href="#connect">GET CONNECTED <span aria-hidden="true">→</span></a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
