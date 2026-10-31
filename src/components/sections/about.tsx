import Image from "next/image";
import { ArrowRight, Gem, MessageCircle, Rocket, UsersRound } from "lucide-react";

import foundingCircleImage from "@/assets/images/exp-founding-circle-960.webp";

import styles from "./about.module.css";

const FEATURES = [
  {
    title: "Curated community",
    description: "A selective network of builders and creators.",
    icon: UsersRound,
  },
  {
    title: "Meaningful conversations",
    description: "Go deeper, not wider.",
    icon: MessageCircle,
  },
  {
    title: "Real opportunities",
    description: "Build, collaborate, grow.",
    icon: Rocket,
  },
  {
    title: "Lasting connections",
    description: "Relationships that create value.",
    icon: Gem,
  },
] as const;

export function About() {
  return (
    <section className={`section ${styles.section}`} id="about" aria-labelledby="about-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.editorial}>
          <div className={styles.copy}>
            <p className={`eyebrow ${styles.eyebrow}`}>TUF Networks / 01 — The idea</p>
            <h2 id="about-title" className={styles.title}>
              <span>Not another</span>
              <span>
                <em>networking group.</em>
              </span>
            </h2>

            <div className={styles.prose}>
              <p>
                We don’t believe meaningful relationships are built by collecting LinkedIn
                connections.
              </p>
              <p>
                They are built around shared experiences, honest conversations, interesting
                problems and time spent in the same room.
              </p>
            </div>

            <a className={styles.cta} href="#about-standard">
              <span className={styles.ctaIcon} aria-hidden="true">
                <ArrowRight />
              </span>
              <span className={styles.ctaText}>Discover the philosophy</span>
            </a>
          </div>

          <div className={styles.visual}>
            <figure className={styles.photoFrame}>
              <Image
                src={foundingCircleImage}
                alt="A small group sharing ideas and conversation around a table."
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                placeholder="blur"
                quality={84}
                className={styles.photo}
                priority
              />
            </figure>

            <aside className={styles.quoteCard} aria-label="The TUF Networks philosophy">
              <p className={styles.quoteLabel}>The philosophy</p>
              <blockquote className={styles.quote}>
                “The right room changes what you see, who you meet, and what you build.”
              </blockquote>
              <p className={styles.cite}>— TUF Networks</p>
            </aside>
          </div>
        </div>

        <div className={styles.standard} id="about-standard">
          <div className={styles.standardIntro}>
            <p className={`eyebrow ${styles.standardEyebrow}`}>Our standard</p>
            <h3 className={styles.standardTitle}>
              Quality <em>over quantity.</em>
            </h3>
            <p className={styles.standardDescription}>
              TUF Networks is intentionally small, curated and relationship-first.
            </p>
          </div>

          <div className={styles.features}>
            {FEATURES.map(({ title, description, icon: Icon }) => (
              <article className={styles.feature} key={title}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <Icon strokeWidth={1.6} />
                </span>
                <h4 className={styles.featureTitle}>{title}</h4>
                <p className={styles.featureDescription}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
