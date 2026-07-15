import Image from "next/image";

const principles = [
  "Everybody belongs.",
  "We communicate.",
  "We look out for each other.",
  "We ride with respect for nature.",
  "We build community, not ego.",
  "We keep improving. Always."
];

export default function Home() {
  return (
    <>
      <header className="header">
        <a href="#top" className="logo">BE:LON</a>
        <nav>
          <a href="#manifesto">Manifesto</a>
          <a href="#constitution">Constitution</a>
          <a href="#collective">Collective</a>
          <a href="#shop">Shop</a>
          <a href="#rides">Rides</a>
          <a href="#join">Journal</a>
        </nav>
        <a href="#join" className="joinTop">Join us</a>
      </header>

      <main id="top">
        <section className="hero">
          <Image src="/hero.jpg" alt="A diverse cycling group in the mountains" fill priority className="cover" />
          <div className="shade" />
          <div className="heroText">
            <h1>Ride together.</h1>
            <p>Everyone belongs. Nobody gets dropped.</p>
            <a className="button" href="#manifesto">This is BE:LON →</a>
          </div>
          <span className="scroll">Scroll down ↓</span>
        </section>

        <section id="manifesto" className="manifesto">
          <div className="manifestoCopy">
            <span className="label">01 / Manifesto</span>
            <h2>We wait.<br/>We greet.<br/>We bring<br/>someone along.</h2>
            <p>We create clothing not to show who belongs, but as a sign that everyone can belong. Maybe you buy a jersey. Maybe you do not. What matters is that you ride again tomorrow — and bring someone with you.</p>
            <a href="#constitution">Read our manifesto →</a>
          </div>
          <div className="imageBox">
            <Image src="/penguins.jpg" alt="Two penguins in front of mountains" fill className="cover" />
          </div>
        </section>

        <section id="constitution" className="constitution">
          <div className="constitutionIntro">
            <span className="label light">02 / Constitution</span>
            <h2>Our principles<br/>guide everything we do.</h2>
            <p>The BE:LON Constitution is our foundation. It defines how we ride, how we make decisions and how we treat people and the planet.</p>
            <a href="#collective">Read the constitution →</a>
          </div>
          <div className="principles">
            {principles.map((p) => <article key={p}><span>○</span><h3>{p}</h3></article>)}
          </div>
        </section>

        <section id="collective" className="collective">
          <div className="imageBox">
            <Image src="/community.jpg" alt="Cyclists sharing food and coffee" fill className="cover" />
          </div>
          <div className="collectiveCopy">
            <span className="label">03 / Collective</span>
            <h2>People first.<br/>Always.</h2>
            <p>We are a global community of riders who support each other on and off the bike. Join the ride.</p>
            <a href="#rides">Meet the community →</a>
          </div>
          <div className="imageBox">
            <Image src="/hug.jpg" alt="Two cyclists hugging" fill className="cover" />
          </div>
        </section>

        <section className="impactRides">
          <div className="textPanel">
            <span className="label">04 / Ride It Forward</span>
            <h2>Your ride can change another person’s path.</h2>
            <p>Add €5 to your order or donate any amount. One hundred percent goes into the BE:LON Fund to support initiatives that make cycling more accessible.</p>
            <a href="#join">See the impact →</a>
          </div>
          <div className="imageBox"><Image src="/forward.jpg" alt="Cyclist overlooking mountains" fill className="cover" /></div>
          <div id="rides" className="textPanel">
            <span className="label">05 / Rides</span>
            <h2>Start where<br/>you are.</h2>
            <p>No-drop rides. Different paces. Real conversations. Good coffee. New places. New people.</p>
            <a href="#join">Upcoming rides →</a>
          </div>
          <div className="imageBox"><Image src="/rides.jpg" alt="A group ride by the mountains" fill className="cover" /></div>
        </section>

        <section id="shop" className="shop">
          <div className="shopIntro">
            <span className="label">06 / Shop</span>
            <h2>Essentials<br/>for the ride.</h2>
            <p>Thoughtful products. Responsible materials. Made in Europe. For the roads and the moments that matter.</p>
            <a href="#join">View collection →</a>
          </div>
          <div className="products">
            <article><div className="product jersey">BE:LON</div><h3>Core Jersey</h3><p>Coming soon</p></article>
            <article><div className="product bib">BE:LON</div><h3>Core Bib</h3><p>Coming soon</p></article>
            <article><div className="product cap">BE:LON</div><h3>Ride Cap</h3><p>Coming soon</p></article>
          </div>
        </section>

        <section id="join" className="join">
          <div className="joinVisual">
            <Image src="/mountains.jpg" alt="Mountain landscape" fill className="cover" />
            <div className="shade" />
            <div>
              <span className="label light">07 / Join us</span>
              <h2>Stories. Rides.<br/>New products. Good people.</h2>
            </div>
          </div>
          <div className="joinForm">
            <p>Stay in the loop and be the first to know what’s next.</p>
            <form action="mailto:hello@beloncollective.com" method="post">
              <input type="email" placeholder="Your email address" required />
              <button>Join us</button>
            </form>
            <small>✓ No spam. Unsubscribe anytime.</small>
          </div>
        </section>
      </main>

      <footer>
        <strong>BE:LON</strong>
        <nav><a href="#manifesto">Manifesto</a><a href="#constitution">Constitution</a><a href="#collective">Collective</a><a href="#shop">Shop</a><a href="#rides">Rides</a></nav>
        <span>© {new Date().getFullYear()} BE:LON</span>
      </footer>
    </>
  );
}
