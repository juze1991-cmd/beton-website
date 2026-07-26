import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import styles from "./page.module.css";

export const metadata = {
  title: "Journal | BE:LON Collective",
  description:
    "Stories about the people, places and moments that make cycling meaningful.",
};

const stories = [
  {
    title: "Why we wait.",
    category: "Community",
    description:
      "A ride is not defined by who arrives first, but by who arrives together.",
    image: "/journal-story-wait.jpg.png",
    imageAlt: "Cyclists waiting together beside a quiet road",
    href: "/journal/why-we-wait",
  },
  {
    title: "Coffee tastes better together.",
    category: "Stories",
    description:
      "The best part of a ride sometimes begins after the bikes have stopped.",
    image: "/journal-story-coffee.jpg.png",
    imageAlt: "A group of cyclists sharing coffee outside a café",
    href: "/journal/coffee-tastes-better-together",
  },
  {
    title: "One bike can change a life.",
    category: "People",
    description:
      "Not every meaningful cycling story starts with the newest equipment.",
    image: "/journal-story-one-bike.jpg.png",
    imageAlt: "A person standing beside a well-used bicycle",
    href: "/journal/one-bike-can-change-a-life",
  },
  {
    title: "The road that brought us here.",
    category: "Places",
    description:
      "Some roads stay with us long after we have reached the end of them.",
    image: "/journal-story-road.jpg.png",
    imageAlt: "A quiet road passing through a varied landscape",
    href: "/journal/the-road-that-brought-us-here",
  },
  {
    title: "More than another jersey.",
    category: "Behind BE:LON",
    description:
      "Why cycling clothing should help people feel included, not measured.",
    image: "/journal-story-jersey.jpg.png",
    imageAlt: "Cycling clothing being prepared on a workshop table",
    href: "/journal/more-than-another-jersey",
  },
  {
    title: "Every ride starts with hello.",
    category: "Community",
    description:
      "Belonging often begins with one person making space for another.",
    image: "/journal-story-hello.jpg.png",
    imageAlt: "Two cyclists greeting each other before a ride",
    href: "/journal/every-ride-starts-with-hello",
  },
];

export default function JournalPage() {
  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <Image
          src="/journal-hero.jpg.png"
          alt="A diverse cycling community spending time together after a ride"
          fill
          priority
          sizes="100vw"
          className={styles.coverImage}
        />

        <div className={styles.heroShade} />

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>The BE:LON Journal</p>

          <h1>
            Stories
            <br />
            worth
            <br />
            riding for.
          </h1>

          <p className={styles.heroText}>
            Not faster. Not further. Just closer to the people, places and
            ideas that make cycling meaningful.
          </p>
        </div>

        <a className={styles.scrollHint} href="#why-we-write">
          Explore the Journal ↓
        </a>
      </section>

      <section id="why-we-write" className={styles.intro}>
        <p className={styles.sectionLabel}>01 / Why we write</p>

        <div className={styles.introGrid}>
          <h2>
            Some rides
            <br />
            become stories.
          </h2>

          <div className={styles.introCopy}>
            <p>We do not believe every ride needs to become a race.</p>

            <p>
              Some become conversations. Some become friendships. Some become
              memories that remain long after the route has disappeared from
              the map.
            </p>

            <p>
              The BE:LON Journal is where we collect those stories — from the
              people, places and ideas that make cycling feel like belonging.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredImage}>
          <Image
            src="/journal-featured.jpg.png"
            alt="Two cyclists waiting for another rider on a mountain road"
            fill
            sizes="(max-width: 900px) 100vw, 62vw"
            className={styles.coverImage}
          />
        </div>

        <article className={styles.featuredContent}>
          <p className={styles.sectionLabel}>02 / Featured story</p>

          <p className={styles.storyCategory}>Community</p>

          <h2>
            The last
            <br />
            rider matters.
          </h2>

          <p>
            Waiting is not a break from the ride. It is part of the ride. A
            story about pace, patience and why nobody should have to earn their
            place in the group.
          </p>

          <span className={styles.comingSoon}>Story coming soon</span>
        </article>
      </section>

      <section className={styles.latest}>
        <div className={styles.latestHeading}>
          <p className={styles.sectionLabel}>03 / Latest stories</p>

          <h2>
            People.
            <br />
            Places.
            <br />
            Moments.
          </h2>

          <p>
            Stories about cycling without podiums, status or pressure. Just
            real people and the moments that keep them riding.
          </p>
        </div>

        <div className={styles.storyGrid}>
          {stories.map((story, index) => (
            <article
              key={story.title}
              className={`${styles.storyCard} ${
                index === 0 || index === 3 ? styles.storyCardWide : ""
              }`}
            >
              <div className={styles.storyImage}>
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes={
                    index === 0 || index === 3
                      ? "(max-width: 850px) 100vw, 66vw"
                      : "(max-width: 850px) 100vw, 33vw"
                  }
                  className={styles.coverImage}
                />
              </div>

              <div className={styles.storyContent}>
                <div className={styles.storyMeta}>
                  <span>{story.category}</span>
                  <span>Coming soon</span>
                </div>

                <h3>{story.title}</h3>

                <p>{story.description}</p>

                <span className={styles.storyLink}>Read story →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.categories}>
        <p className={styles.sectionLabel}>04 / Explore</p>

        <div className={styles.categoryList}>
          <span>Community</span>
          <span>People</span>
          <span>Places</span>
          <span>Stories</span>
          <span>Behind BE:LON</span>
        </div>
      </section>

      <section className={styles.quote}>
        <p className={styles.sectionLabel}>05 / Belonging</p>

        <blockquote>
          Belonging
          <br />
          begins with
          <br />
          showing up.
        </blockquote>

        <p>
          You do not need the fastest bike, the right clothes or years of
          experience. You only need somewhere you are welcome.
        </p>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.newsletterImage}>
          <Image
            src="/journal-newsletter.jpg.png"
            alt="Two bicycles resting in a quiet landscape"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
            className={styles.coverImage}
          />

          <div className={styles.newsletterShade} />

          <div className={styles.newsletterTitle}>
            <p className={styles.sectionLabel}>06 / Stay connected</p>

            <h2>
              Every story
              <br />
              starts with
              <br />
              one ride.
            </h2>
          </div>
        </div>

        <div className={styles.newsletterContent}>
          <h3>Stories from the road, without the noise.</h3>

          <p>
            Join the BE:LON Journal for new stories, community rides and ideas
            worth carrying forward.
          </p>

          <form
            className={styles.newsletterForm}
            action="mailto:hello@beloncollective.com"
            method="post"
          >
            <label className={styles.srOnly} htmlFor="journal-email">
              Email address
            </label>

            <input
              id="journal-email"
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

          <small>No spam. No pressure. Leave whenever you like.</small>

          <Link className={styles.backLink} href="/">
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
