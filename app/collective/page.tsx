import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Collective | BE:LON Collective",
  description:
    "The BE:LON Collective is a community for people who believe cycling becomes better when more people feel welcome.",
};

const navigation = [
  { label: "Manifesto", href: "/manifesto" },
  { label: "Constitution", href: "/constitution" },
  { label: "Collective", href: "/collective" },
  { label: "Ride It Forward", href: "/ride-it-forward" },
  { label: "Journal", href: "/journal" },
  { label: "Shop", href: "/shop" },
];

const values = [
  {
    number: "01",
    title: "Come as you are.",
    text: "You do not need the fastest bike, the newest clothing or years of experience. Curiosity is enough.",
  },
  {
    number: "02",
    title: "Different paces belong together.",
    text: "Some people ride fast. Some ride far. Some are just beginning. Nobody has to earn their place.",
  },
  {
    number: "03",
    title: "We make room.",
    text: "Belonging means noticing who is missing, listening carefully and creating space for more people.",
  },
  {
    number: "04",
    title: "We arrive together.",
    text: "A good ride is not measured by who finishes first. It is measured by whether everyone felt part of it.",
  },
];

export default function CollectivePage() {
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
                item.href === "/collective"
                  ? styles.activeNavigation
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.label}>BE:LON Collective</p>

          <h1>
            People first.
            <br />
            Always.
          </h1>

          <p className={styles.heroText}>
            BE:LON is for people who believe cycling becomes better when more
            people feel welcome.
          </p>
        </div>

        <div className={styles.heroVisual}>
          <Image
            src="/collective.jpg.png"
            alt="Two cyclists embracing after a shared ride"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.cover}
          />
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>Why a collective?</p>

        <div>
          <h2>Because belonging does not happen by accident.</h2>

          <p>
            Cycling can create friendship, confidence and freedom. But it can
            also feel exclusive, expensive and intimidating. We want to help
            build the version that brings people together.
          </p>

          <p>
            A collective is more than an audience or a customer list. It is a
            group of people who look out for one another and help make the
            sport easier to enter.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        {values.map((value) => (
          <article key={value.number} className={styles.valueCard}>
            <span>{value.number}</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.belonging}>
        <p className={styles.sectionLabel}>Belonging in practice</p>

        <div className={styles.belongingContent}>
          <h2>You do not have to look like a cyclist to be one.</h2>

          <div className={styles.belongingText}>
            <p>
              There is no correct body, background, age, gender, pace or level
              of experience.
            </p>

            <p>
              You can ride twenty kilometres or two hundred. You can wear a
              BE:LON jersey or whatever is already in your wardrobe. What
              matters is how we treat one another.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.label}>The collective starts with us.</p>

        <h2>
          Greet someone.
          <br />
          Wait for someone.
          <br />
          Bring someone along.
        </h2>

        <p>
          Community is not something we claim. It is something we practise,
          one ride and one person at a time.
        </p>

        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
