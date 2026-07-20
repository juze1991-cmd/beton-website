import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Manifesto | BE:LON Collective",
  description:
    "Why BE:LON exists and how we want to make cycling more open, accessible and community-driven.",
};

const navigation = [
  { label: "Manifesto", href: "/manifesto" },
  { label: "Constitution", href: "/constitution" },
  { label: "Collective", href: "/collective" },
  { label: "Ride It Forward", href: "/ride-it-forward" },
  { label: "Journal", href: "/journal" },
  { label: "Shop", href: "/shop" },
];

export default function ManifestoPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          BE:LON
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.href === "/manifesto" ? styles.activeNavigation : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className={styles.hero}>
        <Image
          src="/manifesto-hero.jpg.png"
          alt="A diverse group of cyclists meeting before a social ride"
          fill
          priority
          sizes="100vw"
          className={styles.coverImage}
        />

        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <p>The BE:LON Manifesto</p>

          <h1>
            Why we
            <br />
            exist.
          </h1>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textPanel}>
          <SectionHeading number="01" title="Why we started" />

          <div className={styles.copy}>
            <p>
              Cycling can be freedom.
              <br />
              Adventure. Connection. Joy.
              <br />
              But entering the sport can feel like passing a test.
            </p>

            <p>
              High prices. Performance pressure. Unspoken rules.
              <br />
              It can be hard to know if you belong.
            </p>

            <p>
              We started BE:LON because we believe cycling is for everyone.
            </p>
          </div>
        </div>

        <div className={styles.imagePanel}>
          <Image
            src="/manifesto-help.jpg.png"
            alt="Cyclists helping each other repair a bicycle"
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={styles.darkNumber}>02</div>

        <div>
          <h2>What we want to change</h2>

          <div className={styles.darkCopy}>
            <p>
              We want to make the first step easier.
              <br />
              Not by lowering the joy, the quality or the ambition.
              <br />
              By removing unnecessary barriers.
            </p>

            <p>
              We believe in a cycling culture that opens doors instead of
              building walls.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textPanel}>
          <SectionHeading number="03" title="Clothing is not the point" />

          <div className={styles.copy}>
            <p>
              We make cycling clothing.
              <br />
              But clothing is not why we are here.
            </p>

            <p>
              We create pieces that help you feel comfortable, confident and
              ready for the ride.
              <br />
              What matters is what happens when we ride together.
            </p>
          </div>
        </div>

        <div className={styles.imagePanel}>
          <Image
            src="/manifesto-break.jpg.png"
            alt="A diverse group of cyclists sharing a break at a café"
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>
      </section>

      <section className={styles.principlesSection}>
        <SectionHeading
          number="04"
          title="Affordable does not mean disposable"
        />

        <div className={styles.principleGrid}>
          <Principle
            icon="◇"
            title="High quality,"
            description="made to last."
          />

          <Principle
            icon="⌑"
            title="Fair prices,"
            description="no inflated markups."
          />

          <Principle
            icon="◯"
            title="Made in Europe,"
            description="responsibly."
          />

          <Principle
            icon="△"
            title="A focused collection"
            description="of what you truly need."
          />

          <Principle
            icon="×"
            title="No hype drops."
            description="No unnecessary waste."
          />
        </div>
      </section>

      <section className={styles.splitSection}>
        <div className={styles.textPanel}>
          <SectionHeading number="05" title="Community has consequences" />

          <div className={styles.copy}>
            <p>
              We wait for each other.
              <br />
              We help when someone has a flat.
              <br />
              We share knowledge.
              <br />
              We respect every pace, every body, every bike.
              <br />
              We support those who have less access.
            </p>

            <p>
              This is the kind of community
              <br />
              we want to ride in.
            </p>
          </div>
        </div>

        <div className={styles.imagePanel}>
          <Image
            src="/manifesto-community.jpg.png"
            alt="Cyclists sitting together and talking after a ride"
            fill
            sizes="(max-width: 850px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>
      </section>

      <section className={styles.closingSection}>
        <div className={styles.closingText}>
          <SectionHeading number="06" title="This is only the beginning" />

          <div className={styles.closingCopy}>
            <p>
              BE:LON is not a finished community asking people to join.
              <br />
              It is something we want to build together.
            </p>

            <p>
              If you believe in a more open, kind and inclusive cycling culture,
              you are already part of it.
            </p>
          </div>
        </div>

        <div className={styles.closingCallout}>
          <h2>
            Ride together.
            <br />
            Everyone belongs.
            <br />
            Nobody gets dropped.
          </h2>

          <Link href="/collective" className={styles.button}>
            Join the Collective
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <Link href="/">BE:LON</Link>

          <p>
            Cycling first.
            <br />
            Community always.
          </p>
        </div>

        <nav className={styles.footerNavigation} aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </main>
  );
}

type SectionHeadingProps = {
  number: string;
  title: string;
};

function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionNumber}>
        <span>{number}</span>
        <span className={styles.numberLine} />
      </div>

      <h2>{title}</h2>
    </div>
  );
}

type PrincipleProps = {
  icon: string;
  title: string;
  description: string;
};

function Principle({ icon, title, description }: PrincipleProps) {
  return (
    <article className={styles.principle}>
      <span className={styles.principleIcon} aria-hidden="true">
        {icon}
      </span>

      <p>
        <strong>{title}</strong>
        <br />
        {description}
      </p>
    </article>
  );
}
