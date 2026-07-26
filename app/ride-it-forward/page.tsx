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
    title: "Contribute.",
    text: "When placing an order, you can add €5 or contribute any other amount to the Ride It Forward Fund.",
  },
  {
    number: "02",
    title: "The fund grows.",
    text: "Every contribution becomes part of a shared community fund that grows throughout the year.",
  },
  {
    number: "03",
    title: "Organisations are nominated.",
    text: "At the end of each year, BE:LON presents five to ten organisations that make cycling more accessible.",
  },
  {
    number: "04",
    title: "The community votes.",
    text: "The BE:LON community decides together which organisations receive the fund.",
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
              All contributions are collected and used to support organisations
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

          <h2>You decide where the fund goes.</h2>

          <p>
            Every year, BE:LON presents five to ten organisations whose 
            work reflects the values of our community.
          </p>

          <p>
            These might be organisations that introduce children to cycling, 
            create opportunities for underrepresented groups, improve access 
            to bicycles or make riding safer and more inclusive.
          </p>

          <p>
            Instead of BE:LON making the final decision, every member 
            of the community gets a vote. The organisations with the 
            most support receive the Ride It Forward Fund.
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
              After every community vote, we publish the organisations selected, 
              the voting results and the amount each organisation receives.
            </p>

            <p>
              Ride It Forward belongs to the community—and the community 
              should always be able to see the impact it creates together.
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
