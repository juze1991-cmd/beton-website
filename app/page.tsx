import Image from "next/image";

const principles = [
  ["I", "Everybody belongs.", "Experience, pace, body, background and equipment never decide who is welcome."],
  ["II", "Nobody gets dropped.", "We communicate, wait and make sure the group arrives together."],
  ["III", "People before performance.", "A good ride is measured by connection, not watts, speed or status."],
  ["IV", "Bring someone along.", "We open the circle instead of protecting it."],
  ["V", "Make it last.", "We choose fewer, durable products and treat resources with respect."],
  ["VI", "Ride it forward.", "We share access, knowledge and opportunity so more people can take part."]
];

const products = [
  ["Core Jersey", "Quiet design. Built for many seasons.", "productJersey"],
  ["Core Bib", "Comfort-led. Durable. No unnecessary noise.", "productBib"],
  ["Ride Cap", "A small sign that the person beside you belongs too.", "productCap"]
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="BE:LON home">
          <span>BE:LON</span>
          <span className="penguinMini" aria-hidden="true">◖◗</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#manifesto">Manifesto</a>
          <a href="#constitution">Constitution</a>
          <a href="#collective">Collective</a>
          <a href="#shop">Shop</a>
          <a href="#rides">Rides</a>
        </nav>
        <a className="joinButton" href="#newsletter">Join us</a>
      </header>

      <main id="top">
        <section className="hero">
          <Image
            src="/hero-collective.jpg"
            alt="A diverse group of cyclists riding together in the mountains"
            fill
            priority
            sizes="100vw"
            className="coverImage"
          />
          <div className="heroOverlay" />
          <div className="heroContent">
            <p className="kicker light">BE:LON Collective</p>
            <h1>Ride together.</h1>
            <p className="heroLead">Everyone belongs. Nobody gets dropped.</p>
            <a className="primaryButton" href="#manifesto">This is BE:LON <span>→</span></a>
          </div>
          <a className="scrollHint" href="#manifesto">↓ <span>Scroll down</span></a>
        </section>

        <section id="manifesto" className="manifesto section">
          <div className="manifestoHeadline">
            <p className="kicker">Our manifesto</p>
            <h2>We wait.<br />We greet.<br />We bring someone along.</h2>
          </div>
          <div className="manifestoCopy">
            <p>We create clothing not to show who belongs, but as a sign that everyone can belong.</p>
            <p>Maybe you buy a jersey. Maybe you do not. What matters is that you ride again tomorrow — and bring someone with you.</p>
            <a className="textLink" href="#constitution">Read the manifesto <span>→</span></a>
          </div>
          <div className="penguinArt" aria-label="Two penguins standing together">
            <svg viewBox="0 0 350 250" role="img">
              <circle className="sun" cx="292" cy="50" r="27" />
              <path className="mountain" d="M0 210 L82 136 L125 174 L182 114 L245 181 L304 132 L350 177 L350 250 L0 250 Z" />
              <ellipse className="penguinBody" cx="148" cy="145" rx="43" ry="72" />
              <ellipse className="penguinBody" cx="220" cy="139" rx="43" ry="72" />
              <ellipse className="penguinBelly" cx="152" cy="157" rx="24" ry="45" />
              <ellipse className="penguinBelly" cx="216" cy="151" rx="24" ry="45" />
              <circle className="penguinEye" cx="141" cy="120" r="4" />
              <circle className="penguinEye" cx="210" cy="114" r="4" />
              <path className="penguinBeak" d="M159 124l19 8-19 8z" />
              <path className="penguinBeak" d="M228 118l19 8-19 8z" />
            </svg>
          </div>
        </section>

        <section id="constitution" className="constitution section">
          <div className="constitutionIntro">
            <div className="documentIcon" aria-hidden="true">▤</div>
            <div>
              <p className="kicker">Our constitution</p>
              <h2>Our principles guide everything we do.</h2>
            </div>
            <p>The BE:LON Constitution is our foundation. It defines how we ride, how we make decisions and how we treat people and the planet.</p>
          </div>
          <div className="principleList">
            {principles.map(([roman, title, text]) => (
              <article key={roman}>
                <span>Article {roman}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="collective" className="storyGrid">
          <article className="imageStory collectiveStory">
            <Image src="/community.jpg" alt="Cyclists riding together through the mountains" fill sizes="(max-width: 800px) 100vw, 50vw" className="coverImage" />
            <div className="storyShade" />
            <div className="storyCopy">
              <p className="kicker light">The collective</p>
              <h2>People first.<br />Always.</h2>
              <p>We support each other on and off the bike. Join rides, share stories and be part of something bigger.</p>
              <a className="lightButton" href="#rides">Meet the community</a>
            </div>
          </article>

          <article className="forwardStory">
            <div className="forwardCopy">
              <p className="kicker">Ride It Forward</p>
              <h2>Your ride can change another person’s path.</h2>
              <p>Add €5 to your order or donate any amount. One hundred percent goes into the BE:LON Fund to support initiatives that make cycling more accessible.</p>
              <a className="darkButton" href="#newsletter">Learn more</a>
            </div>
            <div className="forwardImage">
              <Image src="/forward.jpg" alt="Cyclists sharing a moment of connection" fill sizes="(max-width: 800px) 100vw, 25vw" className="coverImage" />
            </div>
          </article>
        </section>

        <section id="shop" className="shop section">
          <div className="shopIntro">
            <p className="kicker">The first collection</p>
            <h2>Essentials.<br />Made to last.</h2>
            <p>Thoughtful products. Responsible materials. Made in Europe. For the roads and the moments that matter.</p>
            <a className="textLink" href="#newsletter">Discover the collection <span>→</span></a>
          </div>
          <div className="productGrid">
            {products.map(([name, note, className]) => (
              <article key={name}>
                <div className={`productVisual ${className}`}>
                  <span className="productMark">BE:LON</span>
                </div>
                <h3>{name}</h3>
                <p>{note}</p>
                <span className="comingSoon">Coming soon</span>
              </article>
            ))}
          </div>
        </section>

        <section id="rides" className="bottomGrid">
          <article className="ridesStory">
            <Image src="/rides.jpg" alt="A welcoming group ride on a mountain road" fill sizes="(max-width: 800px) 100vw, 55vw" className="coverImage" />
            <div className="storyShade" />
            <div className="storyCopy">
              <p className="kicker light">BE:LON Rides</p>
              <h2>Start where you are.<br />We’ll ride from there.</h2>
              <p>No-drop rides. Different paces. Real conversations. Good coffee. New places. New people.</p>
              <a className="textLink lightTextLink" href="#newsletter">Upcoming rides <span>→</span></a>
            </div>
          </article>

          <article id="newsletter" className="newsletter">
            <div>
              <p className="kicker light">Stay in the loop</p>
              <h2>Stories. Rides.<br />New products.<br />Good people.</h2>
              <p>Join our newsletter and be the first to know what’s next.</p>
            </div>
            <form action="mailto:hello@beloncollective.com" method="post">
              <label className="srOnly" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="Your email address" required />
              <button type="submit">Join us</button>
            </form>
            <small>✓ No spam. Unsubscribe anytime.</small>
          </article>
        </section>
      </main>

      <footer>
        <div className="footerBrand"><span>BE:LON</span><span className="penguinMini">◖◗</span></div>
        <div className="footerNav">
          <a href="#manifesto">Manifesto</a>
          <a href="#constitution">Constitution</a>
          <a href="#collective">Collective</a>
          <a href="#shop">Shop</a>
          <a href="#rides">Rides</a>
        </div>
        <div className="footerMeta">
          <span>© {new Date().getFullYear()} BE:LON Collective</span>
          <a href="mailto:hello@beloncollective.com">Contact</a>
        </div>
      </footer>
    </>
  );
}
