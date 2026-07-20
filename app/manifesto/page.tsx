import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Manifesto | BE:LON Collective",
  description:
    "Why BE:LON exists: cycling should bring people together, not keep them apart.",
};

export default function ManifestoPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="Back to homepage">
          BE:LON
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          <Link href="/manifesto" className={styles.active}>
            Manifesto
          </Link>
          <Link href="/constitution">Constitution</Link>
          <Link href="/collective">Collective</Link>
          <Link href="/ride-it-forward">Ride It Forward</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/shop">Shop</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <Image
          src="/hero.jpg.png"
          alt="A diverse group of cyclists spending time together"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>The BE:LON Manifesto</p>
          <h1>Why we exist.</h1>
        </div>
      </section>

      <section className={styles.darkStatement}>
        <div className={styles.narrow}>
          <p className={styles.sectionNumber}>01</p>

          <h2>Cycling has changed.</h2>

          <div className={styles.statementLines}>
            <p>It has become faster.</p>
            <p>More expensive.</p>
            <p>More exclusive.</p>
          </div>

          <p className={styles.bodyLarge}>
            Sometimes it feels like you need the right bike, the right clothes
            and the right numbers before you are allowed to belong.
          </p>
        </div>
      </section>

      <section className={styles.imageSection}>
        <Image
          src="/collective.jpg.png"
          alt="Two people embracing after riding together"
          fill
          sizes="100vw"
          className={styles.fullImage}
        />
      </section>

      <section className={styles.beliefs}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionNumber}>02</p>
          <h2>We believe.</h2>
        </div>

        <div className={styles.beliefList}>
          <article className={styles.belief}>
            <span>01</span>
            <p>
              Riding together matters more than proving who can ride the
              fastest.
            </p>
          </article>

          <article className={styles.belief}>
            <span>02</span>
            <p>
              Nobody should feel underdressed, inexperienced or out of place.
            </p>
          </article>

          <article className={styles.belief}>
            <span>03</span>
            <p>Kindness beats watts.</p>
          </article>

          <article className={styles.belief}>
            <span>04</span>
            <p>Community comes before clothing.</p>
          </article>
        </div>
      </section>

      <section className={styles.everyone}>
        <p className={styles.sectionNumber}>03</p>
        <h2>Everyone belongs.</h2>
        <p>
          Whatever your pace, your background, your body, your experience or
          the bike you ride.
        </p>
      </section>

      <section className={styles.forward}>
        <div className={styles.forwardText}>
          <p className={styles.sectionNumber}>04</p>
          <h2>Sometimes belonging needs a little support.</h2>

          <p>
            Ride It Forward is our commitment to helping more people take part
            in cycling—regardless of what they can afford.
          </p>

          <Link href="/ride-it-forward" className={styles.textLink}>
            Learn about Ride It Forward
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={styles.forwardImageWrapper}>
          <Image
            src="/penguins.jpg.png"
            alt="Two penguins standing together as a symbol of belonging"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.forwardImage}
          />
        </div>
      </section>

      <section className={styles.closing}>
        <div>
          <p className={styles.sectionNumber}>05</p>
          <h2>
            Ride together.
            <br />
            Everyone belongs.
            <br />
            Nobody gets dropped.
          </h2>

          <Link href="/collective" className={styles.button}>
            Join the Collective
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <Link href="/" className={styles.footerLogo}>
            BE:LON Collective
          </Link>

          <p>
            Cycling first.
            <br />
            Community always.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <Link href="/manifesto">Manifesto</Link>
          <Link href="/constitution">Constitution</Link>
          <Link href="/collective">Collective</Link>
          <Link href="/ride-it-forward">Ride It Forward</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/shop">Shop</Link>
        </div>
      </footer>
    </main>
  );
}
