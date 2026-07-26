import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import styles from "./page.module.css";

export const metadata = {
  title: "Shop | BE:LON Collective",
  description:
    "The BE:LON Core Collection. Thoughtful cycling essentials, responsibly made in Europe.",
};

const products = [
  {
    number: "01",
    name: "Core Jersey",
    subtitle: "For long rides, short rides and everything in between.",
    description:
      "A comfortable everyday jersey designed for real rides and different bodies. Clean, functional and free from unnecessary details.",
    image: "/shop-jersey.webp",
    imageAlt: "BE:LON Core Jersey",
    material: "Technical recycled fabric",
    production: "Made in Europe",
    status: "Coming soon",
  },
  {
    number: "02",
    name: "Core Bib",
    subtitle: "Comfort that stays quiet.",
    description:
      "Supportive bib shorts built for everyday riding. Designed to feel comfortable without turning every ride into a performance test.",
    image: "/shop-bib.webp",
    imageAlt: "BE:LON Core Bib",
    material: "Durable stretch fabric",
    production: "Made in Europe",
    status: "Coming soon",
  },
  {
    number: "03",
    name: "Core Socks",
    subtitle: "A small part of every good ride.",
    description:
      "Simple cycling socks with a secure fit, breathable construction and no oversized branding.",
    image: "/shop-socks.webp",
    imageAlt: "BE:LON Core Socks",
    material: "Breathable performance yarn",
    production: "Made in Europe",
    status: "Coming soon",
  },
];

export default function ShopPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <Image
          src="/shop-hero.webp"
          alt="A diverse group of cyclists wearing BE:LON clothing"
          fill
          priority
          sizes="100vw"
          className={styles.coverImage}
        />

        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>The BE:LON Core Collection</p>

          <h1>
            Clothing
            <br />
            for the ride.
            <br />
            Not the status.
          </h1>

          <p>
            Thoughtful essentials. Responsible materials. Made in Europe.
            Designed for people who simply want to ride.
          </p>

          <a className={styles.heroLink} href="#collection">
            Explore the collection ↓
          </a>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionLabel}>01 / The collection</p>

        <div className={styles.introGrid}>
          <h2>
            Less noise.
            <br />
            Better essentials.
          </h2>

          <div className={styles.introCopy}>
            <p>
              BE:LON does not need a collection with twenty seasonal products.
              We are starting with the pieces that matter most.
            </p>

            <p>
              One jersey. One bib. One pair of socks. Each product should be
              comfortable, durable and easy to wear again and again.
            </p>

            <p>
              The first BE:LON collection is currently in development. Product
              details, sizes and prices will be published before the first
              release.
            </p>
          </div>
        </div>
      </section>

      <section id="collection" className={styles.collection}>
        {products.map((product, index) => (
          <article
            key={product.name}
            className={`${styles.product} ${
              index % 2 !== 0 ? styles.productReverse : ""
            }`}
          >
            <div className={styles.productImage}>
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 55vw"
                className={styles.coverImage}
              />
            </div>

            <div className={styles.productContent}>
              <div className={styles.productTopline}>
                <span>{product.number}</span>
                <span>{product.status}</span>
              </div>

              <h2>{product.name}</h2>

              <p className={styles.productSubtitle}>{product.subtitle}</p>

              <p className={styles.productDescription}>
                {product.description}
              </p>

              <dl className={styles.productFacts}>
                <div>
                  <dt>Material</dt>
                  <dd>{product.material}</dd>
                </div>

                <div>
                  <dt>Production</dt>
                  <dd>{product.production}</dd>
                </div>

                <div>
                  <dt>Availability</dt>
                  <dd>First drop coming soon</dd>
                </div>
              </dl>

              <Link className={styles.productLink} href="/#join">
                Join the first drop →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.production}>
        <div className={styles.productionImage}>
          <Image
            src="/shop-production.webp"
            alt="Cycling clothing being produced in a European workshop"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.coverImage}
          />
        </div>

        <div className={styles.productionContent}>
          <p className={styles.sectionLabel}>02 / Made responsibly</p>

          <h2>
            Made closer.
            <br />
            Built to last.
          </h2>

          <p>
            Our goal is to produce the BE:LON Core Collection in Europe and
            work with partners who share our expectations for quality,
            responsibility and fair collaboration.
          </p>

          <p>
            We would rather begin with fewer products and make them properly
            than fill a shop with things nobody really needs.
          </p>

          <span className={styles.note}>
            Final production partners and material details will be published
            before launch.
          </span>
        </div>
      </section>

      <section className={styles.fit}>
        <div className={styles.fitHeading}>
          <p className={styles.sectionLabel}>03 / Different bodies</p>

          <h2>
            Cycling bodies
            <br />
            do not come
            <br />
            in one shape.
          </h2>
        </div>

        <div className={styles.fitImage}>
          <Image
            src="/shop-fit.webp"
            alt="Cyclists with different ages and body types wearing BE:LON clothing"
            fill
            sizes="100vw"
            className={styles.coverImage}
          />
        </div>

        <div className={styles.fitCopy}>
          <p>
            We want BE:LON clothing to work for more than one narrow idea of
            what a cyclist should look like.
          </p>

          <p>
            Fit, sizing and product testing should reflect different bodies,
            ages and riding styles. Nobody should feel that cycling clothing
            was designed for somebody else.
          </p>
        </div>
      </section>

      <section className={styles.forward}>
        <p className={styles.sectionLabel}>04 / Ride It Forward</p>

        <div className={styles.forwardGrid}>
          <h2>
            Add something
            <br />
            to the ride.
          </h2>

          <div>
            <p>
              When the shop launches, every order can include a voluntary
              contribution to the Ride It Forward community fund.
            </p>

            <p>
              At the end of each year, the BE:LON community votes on which
              selected organisations receive the collected amount.
            </p>

            <Link className={styles.textLink} href="/ride-it-forward">
              Learn about Ride It Forward →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.firstDrop}>
        <div className={styles.firstDropCopy}>
          <p className={styles.sectionLabel}>05 / First drop</p>

          <h2>
            Three essentials.
            <br />
            One first step.
          </h2>

          <p>
            Join the BE:LON community and be the first to hear about product
            development, sizing, prices and the first release.
          </p>
        </div>

        <div className={styles.signup}>
          <form
            className={styles.signupForm}
            action="mailto:hello@beloncollective.com"
            method="post"
          >
            <label className={styles.srOnly} htmlFor="shop-email">
              Email address
            </label>

            <input
              id="shop-email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
            />

            <button type="submit">
              Join
              <span>→</span>
            </button>
          </form>

          <small>No spam. Unsubscribe anytime.</small>

          <Link className={styles.backLink} href="/">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
