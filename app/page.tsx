import Image from "next/image";

const principles = [
  ["Everybody belongs.", "Different bodies, backgrounds, ages, paces and levels of experience are welcome."],
  ["We communicate.", "We speak clearly, listen and make sure nobody is left guessing."],
  ["We look out for each other.", "We wait, help and arrive together."],
  ["We ride with respect for nature.", "We choose responsible routes, materials and decisions."],
  ["We build community, not ego.", "People matter more than status, equipment or performance."],
  ["We keep improving. Always.", "We stay open, learn and hold ourselves accountable."]
];

const products = [
  ["Core Jersey", "jersey"],
  ["Core Bib", "bib"],
  ["Ride Cap", "cap"],
  ["Core Socks", "socks"]
];

export default function Home() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#top">BE:LON</a>
        <nav aria-label="Main navigation">
          <a href="#manifesto">Manifesto</a>
          <a href="#constitution">Constitution</a>
          <a href="#collective">Collective</a>
          <a href="#shop">Shop</a>
          <a href="#rides">Rides</a>
          <a href="#join">Journal</a>
        </nav>
        <a className="joinTop" href="#join">Join us</a>
      </header>

      <main id="top">
        <section className="hero">
          <Image src="/hero.jpg.png" alt="A diverse group of cyclists riding together in the mountains" fill priority sizes="100vw" className="cover heroPhoto" />
          <div className="heroShade" />
          <div className="heroCopy">
            <h1>Ride<br />together.</h1>
            <p>Everyone belongs.<br />Nobody gets dropped.</p>
            <a className="buttonLight" href="#manifesto">This is BE:LON →</a>
          </div>
          <a className="scrollHint" href="#manifesto">Scroll down ↓</a>
        </section>

        <section id="manifesto" className="manifesto">
          <div className="manifestoCopy">
            <p className="label">01 / Manifesto</p>
            <h2>We wait.<br />We greet.<br />We bring<br />someone along.</h2>
            <p>We create clothing not to show who belongs, but as a sign that everyone can belong. Maybe you buy a jersey. Maybe you do not. What matters is that you ride again tomorrow — and bring someone with you.</p>
            <a className="textLink" href="#constitution">Read our manifesto →</a>
          </div>
          <div className="manifestoVisual">
            <Image src="/penguins.jpg.png" alt="Two penguins standing together before a mountain landscape" fill sizes="65vw" className="cover" />
          </div>
        </section>

        <section id="constitution" className="constitution">
          <div className="constitutionIntro">
            <p className="label labelLight">02 / Constitution</p>
            <h2>Our principles<br />guide everything<br />we do.</h2>
            <p>The BE:LON Constitution is our foundation. It defines how we ride, how we make decisions and how we treat people and the planet.</p>
            <a className="textLink lightLink" href="#collective">Read the constitution →</a>
          </div>
          <div className="constitutionRight">
            <div className="principles">
              {principles.map(([title, text]) => (
                <article key={title}>
                  <span className="principleIcon">○</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="collective" className="collective">
          <div className="collectiveCopy">
            <p className="label labelLight">03 / Collective</p>
            <h2>People first.<br />Always.</h2>
            <p>We are a global community of riders who support each other on and off the bike. Join the ride.</p>
            <a className="textLink lightLink" href="#rides">Meet the community →</a>
          </div>
          <div className="collectiveImage">
            <Image src="/collective.jpg.png" alt="Two cyclists hugging after a ride" fill sizes="70vw" className="cover" />
          </div>
        </section>

        <section className="impactRides">
          <article className="textTile">
            <p className="label">04 / Ride It Forward</p>
            <h2>Your ride can change another person’s path.</h2>
            <p>Add €5 to your order or donate any amount. One hundred percent goes into the BE:LON Fund to support initiatives that make cycling more accessible.</p>
            <a className="textLink" href="#join">See the impact →</a>
          </article>
          <div className="imagePanel">
            <Image src="/forward.jpg.png" alt="A cyclist looking over a mountain landscape at sunset" fill sizes="25vw" className="cover" />
          </div>
          <article id="rides" className="textTile">
            <p className="label">05 / Rides</p>
            <h2>Start where<br />you are.</h2>
            <p>No-drop rides. Different paces. Real conversations. Good coffee. New places. New people.</p>
            <a className="textLink" href="#join">Upcoming rides →</a>
          </article>
          <div className="imagePanel">
            <Image src="/rides.jpg.png" alt="A group of cyclists riding along a mountain road" fill sizes="35vw" className="cover" />
          </div>
        </section>

        <section id="shop" className="shop">
          <div className="shopIntro">
            <p className="label">06 / Shop</p>
            <h2>Essentials<br />for the ride.</h2>
            <p>Thoughtful products. Responsible materials. Made in Europe. For the roads and the moments that matter.</p>
            <a className="textLink" href="#join">View collection →</a>
          </div>
          <div className="productGrid">
            {products.map(([name, cls]) => (
              <article key={name}>
                <div className={`productVisual ${cls}`}><span>BE:LON</span></div>
                <h3>{name}</h3>
                <p>Coming soon</p>
              </article>
            ))}
          </div>
        </section>

        <section id="join" className="join">
          <div className="joinVisual">
            <Image src="/mountains.jpg" alt="Mountain landscape" fill sizes="50vw" className="cover" />
            <div className="joinShade" />
            <div className="joinCopy">
              <p className="label labelLight">07 / Join us</p>
              <h2>Stories. Rides.<br />New products. Good people.</h2>
            </div>
          </div>
          <div className="joinForm">
            <p>Stay in the loop and be the first to know what’s next.</p>
            <form action="mailto:hello@beloncollective.com" method="post">
              <label className="srOnly" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="Your email address" required />
              <button type="submit">Join us</button>
            </form>
            <small>✓ No spam. Unsubscribe anytime.</small>
          </div>
        </section>
      </main>

      <footer>
        <strong>BE:LON</strong>
        <nav>
          <a href="#manifesto">Manifesto</a>
          <a href="#constitution">Constitution</a>
          <a href="#collective">Collective</a>
          <a href="#shop">Shop</a>
          <a href="#rides">Rides</a>
        </nav>
        <span>© {new Date().getFullYear()} BE:LON Collective</span>
      </footer>
    </>
  );
}
