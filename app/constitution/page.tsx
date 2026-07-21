import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const navigation = [
  { label: "Manifesto", href: "/manifesto" },
  { label: "Constitution", href: "/constitution" },
  { label: "Collective", href: "/collective" },
  { label: "Ride It Forward", href: "/ride-it-forward" },
  { label: "Journal", href: "/journal" },
  { label: "Shop", href: "/shop" },
];

const principles = [
  {
    number: "01",
    title: "Everybody belongs.",
    text: "Different bodies, backgrounds, ages, paces and levels of experience are welcome. Nobody has to prove that they deserve to be here."
  },
  {
    number: "02",
    title: "We communicate.",
    text: "We speak clearly, listen carefully and make sure nobody is left guessing."
  },
  {
    number: "03",
    title: "We look out for each other.",
    text: "We wait. We help. We check in. The ride is not complete until everyone has arrived."
  },
  {
    number: "04",
    title: "We ride with respect for nature.",
    text: "The places we ride through are not a backdrop. We protect what allows us to ride."
  },
  {
    number: "05",
    title: "We build community, not ego.",
    text: "People matter more than status, equipment or performance."
  },
  {
    number: "06",
    title: "We keep improving. Always.",
    text: "We stay curious, learn from mistakes and keep moving forward together."
  }
];

export default function ConstitutionPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image
          src="/constitution-hero.jpg.png"
          alt="Cyclists preparing for a ride"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <p className={styles.label}>BE:LON Constitution</p>

          <h1>
            How we ride.
            <br />
            How we act.
            <br />
            How we belong.
          </h1>

          <p>
            The BE:LON Constitution is not a marketing promise.
            It is the standard we hold ourselves to —
            on the road, in our community and in every decision we make.
          </p>
        </div>
      </section>

      <section className={styles.intro}>
        <h2>Belonging requires more than good intentions.</h2>

        <p>
          A collective only works when people know what they can expect from
          each other. These principles guide how we ride, communicate,
          create products and build BE:LON.
        </p>
      </section>

      <section className={styles.principles}>
        {principles.map((item) => (
          <article key={item.number} className={styles.card}>
            <span>{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.statement}>
        <h2>
          This is the standard.
          <br />
          Not perfection —
          responsibility.
        </h2>

        <p>
          We will make mistakes.
          What matters is whether we listen,
          learn and act.
        </p>

        <Link href="/" className={styles.button}>
          ← Back to Home
        </Link>
      </section>
    </main>
  );
}
