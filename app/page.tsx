import Image from "next/image";
import NewsletterForm from "../components/NewsletterForm";

const products = [
  { name: "Core Jersey", note: "Coming soon", className: "jersey" },
  { name: "Core Bib", note: "Coming soon", className: "bib" },
  { name: "Ride Cap", note: "Coming soon", className: "cap" },
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="wordmark" href="#top">BE:LON</a>
        <nav aria-label="Main navigation">
          <a href="#manifesto">Manifesto</a>
          <a href="#forward">Ride It Forward</a>
          <a href="#shop">Shop</a>
          <a href="#rides">Rides</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <Image src="/hero.svg" alt="A group of cyclists riding together" fill priority sizes="100vw" />
          <div className="heroShade" />
          <div className="heroCopy">
            <p className="eyebrow light">Built on community. Ridden together.</p>
            <h1>Never ride alone.</h1>
            <p>Clothing, rides and stories for people who believe cycling feels better together.</p>
            <a className="button lightButton" href="#manifesto">Meet the collective</a>
          </div>
        </section>

        <section className="intro section">
          <p className="eyebrow dark">Why we exist</p>
          <h2>Everyone deserves a place in the group ride.</h2>
          <p className="lead">BE:LON is a cycling collective built around welcome, not status. We make thoughtful essentials and create space for riders to meet, contribute and belong.</p>
        </section>

        <section id="manifesto" className="manifesto section">
          <div className="penguinWrap">
            <Image src="/penguins.svg" alt="Two penguins standing together" width={760} height={560} />
          </div>
          <div className="manifestoCopy">
            <p className="eyebrow light">Our manifesto</p>
            <h2>We wait. We greet. We bring someone along.</h2>
            <p>We create clothing not to show who belongs, but as a sign that everyone can belong. Maybe you buy a jersey. Maybe you do not. What matters is that you ride again tomorrow — and bring someone with you.</p>
          </div>
        </section>

        <section className="editorialSplit">
          <div className="imagePanel">
            <Image src="/community.svg" alt="Cyclists sharing a relaxed coffee stop" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <div className="copyPanel">
            <p className="eyebrow dark">Community first</p>
            <h2>No-drop rides. Real conversations. Coffee after.</h2>
            <p>Open rides for different paces and experience levels. We communicate, help when something goes wrong and make sure nobody feels measured by their equipment.</p>
            <a className="textLink" href="#rides">Discover BE:LON Rides →</a>
          </div>
        </section>

        <section id="forward" className="forward section">
          <p className="eyebrow light">Ride It Forward</p>
          <h2>Add €5. Help someone else take part.</h2>
          <p>Voluntary contributions flow into a transparent community fund supporting access to cycling. The collective helps decide which eligible initiatives receive support.</p>
          <a className="button darkButton" href="#newsletter">Follow the first projects</a>
        </section>

        <section className="editorialSplit warm">
          <div className="copyPanel">
            <p className="eyebrow dark">Made in Europe</p>
            <h2>High quality. Honest choices. Fewer products.</h2>
            <p>European production, with Portugal as our preferred base. Durability before novelty, quiet design and guidance that helps every piece stay in use longer.</p>
          </div>
          <div className="imagePanel productTexture" aria-label="Close-up textile illustration" />
        </section>

        <section id="shop" className="shop section">
          <div className="sectionHeading">
            <div>
              <p className="eyebrow dark">First collection</p>
              <h2>Essentials for the ride.</h2>
            </div>
            <p>A focused range developed carefully and kept relevant beyond one season.</p>
          </div>
          <div className="productGrid">
            {products.map((product) => (
              <article className="productCard" key={product.name}>
                <div className={`productArt ${product.className}`} />
                <h3>{product.name}</h3>
                <p>{product.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="rides" className="rides section">
          <div>
            <p className="eyebrow light">Ride together</p>
            <h2>Start where you are.</h2>
          </div>
          <p>BE:LON Rides are planned as friendly, no-drop gatherings. Routes and first dates will be announced through the newsletter.</p>
        </section>

        <section id="newsletter" className="newsletter section">
          <div>
            <p className="eyebrow dark">Join BE:LON</p>
            <h2>Stories. Rides. New products. Good people.</h2>
          </div>
          <NewsletterForm />
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#top">BE:LON</a>
        <p>Never ride alone.</p>
        <p>© {new Date().getFullYear()} BE:LON Collective</p>
      </footer>
    </>
  );
}
