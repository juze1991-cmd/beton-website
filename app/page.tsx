import Image from "next/image";
import heroImage from "./hero-collective.png";

const principles = [
  ["01", "Everybody belongs.", "Experience, pace, body, background and equipment do not decide who is welcome."],
  ["02", "Nobody gets dropped.", "We communicate, wait and make sure the group arrives together."],
  ["03", "People before performance.", "A good ride is measured by connection, not watts, speed or status."],
  ["04", "Bring someone along.", "We open the circle instead of protecting it."],
  ["05", "Make it last.", "We choose fewer, durable products and treat resources with respect."],
  ["06", "Ride it forward.", "We share access, knowledge and opportunity so more people can take part."],
];

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a className="wordmark" href="#top">BE:LON</a>
        <nav>
          <a href="#manifesto">Manifesto</a>
          <a href="#constitution">Constitution</a>
          <a href="#collective">Collective</a>
          <a href="#shop">Shop</a>
        </nav>
        <a className="headerCta" href="#newsletter">Join us</a>
      </header>

      <main id="top">
        <section className="hero">
          <Image src={heroImage} alt="A diverse group of cyclists riding together in the mountains" fill priority placeholder="blur" sizes="100vw" className="heroImage" />
          <div className="heroOverlay" />
          <div className="heroCopy">
            <p className="eyebrow light">BE:LON Collective</p>
            <h1>Ride together.</h1>
            <p className="heroLead">Everyone belongs. Nobody gets dropped.</p>
            <a className="button lightButton" href="#manifesto">Discover our way of riding</a>
          </div>
        </section>

        <section id="manifesto" className="manifesto section">
          <p className="sectionKicker">01 — Our manifesto</p>
          <h2>We do not ride to prove who belongs. We ride to make belonging visible.</h2>
          <div className="manifestoGrid">
            <div className="penguinMark">
              <svg viewBox="0 0 260 180" aria-hidden="true">
                <ellipse cx="92" cy="98" rx="44" ry="62" />
                <ellipse cx="168" cy="98" rx="44" ry="62" />
                <ellipse className="belly" cx="95" cy="110" rx="25" ry="38" />
                <ellipse className="belly" cx="165" cy="110" rx="25" ry="38" />
                <circle className="eye" cx="83" cy="77" r="4" />
                <circle className="eye" cx="159" cy="77" r="4" />
                <path className="beak" d="M96 83l18 8-18 8z" />
                <path className="beak" d="M172 83l18 8-18 8z" />
              </svg>
              <p>Our symbol for staying together.</p>
            </div>
            <div className="manifestoText">
              <p>We greet. We wait. We help when something goes wrong. We make room in the group instead of guarding it.</p>
              <p>Maybe you know every climb. Maybe this is your first group ride. None of that decides your place.</p>
              <p>BE:LON creates clothing, rides and stories for people who believe cycling feels better together.</p>
            </div>
          </div>
        </section>

        <section id="collective" className="collectivePanel">
          <div className="collectiveImage" />
          <div className="collectiveCopy">
            <p className="eyebrow light">The collective</p>
            <h2>The group is the hero.</h2>
            <p>Different people, different paces and one shared direction. Our imagery is diverse, warm and open — because everyone can ride with us.</p>
            <a className="textLink" href="#constitution">Read the constitution →</a>
          </div>
        </section>

        <section id="constitution" className="constitution section">
          <p className="sectionKicker dark">02 — Our constitution</p>
          <div className="splitHeading">
            <h2>Six principles for every ride.</h2>
            <p>Not a campaign. A standard for our website, our products, our images and the way we ride together.</p>
          </div>
          <div className="principles">
            {principles.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="forward section">
          <p className="eyebrow dark">Ride It Forward</p>
          <h2>Make your ride open the road for somebody else.</h2>
          <div className="forwardText">
            <p>A voluntary contribution flows into a transparent community fund supporting access to cycling.</p>
            <p>The collective helps decide which eligible projects receive support. Small contribution. Shared impact.</p>
          </div>
          <a className="button darkButton" href="#newsletter">Follow the first projects</a>
        </section>

        <section id="shop" className="shop section">
          <p className="sectionKicker dark">03 — First collection</p>
          <div className="splitHeading">
            <h2>Fewer products. Better reasons.</h2>
            <p>Thoughtful essentials, European production and quiet design that stays relevant beyond one season.</p>
          </div>
          <div className="productGrid">
            {["Core Jersey", "Core Bib", "Ride Cap"].map((name, index) => (
              <article key={name}>
                <div className={`productVisual visual${index + 1}`}><span>BE:LON</span></div>
                <h3>{name}</h3>
                <p>Coming soon</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rides section">
          <div><p className="eyebrow light">BE:LON Rides</p><h2>Start where you are.</h2></div>
          <p>Friendly no-drop rides for different paces and experience levels. Routes and first dates will be announced through the newsletter.</p>
        </section>

        <section id="newsletter" className="newsletter section">
          <div><p className="eyebrow dark">Join BE:LON</p><h2>Stories, rides and thoughtful products.</h2></div>
          <form action="mailto:hello@beloncollective.com" method="post">
            <input type="email" name="email" placeholder="Your email address" required />
            <button type="submit">Join the collective</button>
          </form>
        </section>
      </main>

      <footer>
        <div><a className="wordmark" href="#top">BE:LON</a><p>Everyone belongs. Nobody gets dropped.</p></div>
        <p>© {new Date().getFullYear()} BE:LON Collective</p>
      </footer>
    </>
  );
}
