import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import styles from "./page.module.css";

export const metadata = {
  title: "Ride It Forward | BE:LON Collective",
  description:
    "Ride It Forward is the BE:LON community fund for organisations that make cycling more accessible.",
};

const steps = [
  {
    number: "01",
    title: "You add something.",
    text: "When placing an order, you can add €5 or contribute another amount to the Ride It Forward Fund.",
  },
  {
    number: "02",
    title: "The fund grows.",
    text: "Every contribution is collected transparently throughout the year. It is not used to discount individual products.",
  },
  {
    number: "03",
    title: "Organisations are proposed.",
    text: "At the end of the year, BE:LON presents a shortlist of five to ten organisations working to make cycling more accessible.",
  },
  {
    number: "04",
    title: "The community decides.",
    text: "The BE:LON community votes on which organisations should receive the money collected through Ride It Forward.",
  },
];

const principles = [
  {
    title: "No individual discounts",
    text: "Ride It Forward does not finance cheaper jerseys for individual customers. The fund supports organisations and projects with a wider social impact.",
  },
  {
    title: "Community decision",
    text: "BE:LON does not decide alone. The final selection is made through an open community vote at the end of each year.",
  },
  {
    title: "Five to ten proposals",
    text: "A shortlist of five to ten suitable organisations is presented before the vote, including clear information about their work.",
  },
  {
    title: "Transparent allocation",
    text: "The result of the vote, the organisations selected and the allocation of the fund will be shared publicly.",
  },
];

export default function RideItForwardPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <Image
          src="/forward.jpg.png"
          alt="A cyclist looking towards a wide mountain landscape"
          fill
          priority
          sizes="100vw"
          className={styles.coverImage}
        />

        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <p>Ride It Forward</p>

          <h1>
            Your ride
            <br />
            can move
            <br />
            something.
          </h1>

          <span>
            A community fund for organisations that make cycling more
            accessible.
          </span>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>The idea</p>

        <div className={styles.introContent}>
          <h2>
            Small contributions.
            <br />
            A collective decision.
          </h2>

          <div className={styles.introCopy}>
            <p>
              Ride It Forward is the BE:LON community fund. When you place an
              order, you can voluntarily add €5 or contribute another amount.
            </p>

            <p>
              The money does not make an individual jersey cheaper. Instead,
              all contributions are collected and used to support organisations
              that help more people gain access to cycling.
            </p>

            <p>
              At the end of each year, the community decides together where the
              fund should go.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.model}>
        <div className={styles.modelHeading}>
          <p className={styles.sectionLabel}>How it works</p>

          <h2>
            One fund.
            <br />
            Four clear steps.
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <article key={step.number} className={styles.step}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.vote}>
        <div className={styles.voteVisual}>
          <Image
            src="/rides.jpg.png"
            alt="A diverse group of cyclists riding together"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>

        <div className={styles.voteContent}>
          <p className={styles.sectionLabel}>The community vote</p>

          <h2>You decide where the money goes.</h2>

          <p>
            At the end of each year, BE:LON selects five to ten organisations
            whose work matches the purpose of Ride It Forward.
          </p>

          <p>
            Each organisation is introduced transparently: what it does, who it
            supports and how the funding could be used.
          </p>

          <p>
            The BE:LON community then votes. The result determines which
            organisations receive the collected fund.
          </p>
        </div>
      </section>

      <section className={styles.principles}>
        <div className={styles.principlesHeading}>
          <p className={styles.sectionLabel}>What this means</p>

          <h2>
            Not charity as marketing.
            <br />
            Shared responsibility.
          </h2>
        </div>

        <div className={styles.principleGrid}>
          {principles.map((principle) => (
            <article key={principle.title} className={styles.principle}>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.transparency}>
        <p className={styles.sectionLabel}>Transparency</p>

        <div className={styles.transparencyContent}>
          <h2>We will show what happens with the fund.</h2>

          <div>
            <p>
              After every annual vote, BE:LON will publish the result, the
              selected organisations and how the money is distributed.
            </p>

            <p>
              Ride It Forward should remain understandable, traceable and open
              to the people who helped build it.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <p className={styles.sectionLabel}>Ride It Forward</p>

        <h2>
          Contribute.
          <br />
          Vote.
          <br />
          Move cycling forward.
        </h2>

        <p>
          The fund will become available alongside the first BE:LON products.
          Until then, we are building the process transparently and carefully.
        </p>

        <div className={styles.actions}>
          <Link href="/#join" className={styles.primaryButton}>
            Join the community
            <span>→</span>
          </Link>

          <Link href="/" className={styles.secondaryLink}>
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
