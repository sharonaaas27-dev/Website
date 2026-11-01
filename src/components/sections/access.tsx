import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Compass, DoorOpen, GitMerge, Sparkles } from "lucide-react";

import foundingCircleImage from "@/assets/images/neww.webp";

import styles from "./access.module.css";

interface AccessItem {
  readonly title: string;
  readonly description: string;
  readonly icon: LucideIcon;
}

const ITEMS: readonly AccessItem[] = [
  {
    title: "Experiences",
    description: "Curated events and gatherings designed to create meaningful connections.",
    icon: Sparkles,
  },
  {
    title: "Collaborations",
    description: "Find people and teams to build projects, companies and ideas with.",
    icon: GitMerge,
  },
  {
    title: "Opportunities",
    description: "access internships , projects , full time opportunities , mentorship & venture building support",
    icon: Compass,
  },
  {
    title: "The Room",
    description: "Access to an exclusive, curated community of ambitious thinkers and builders.",
    icon: DoorOpen,
  },
];

export function Access() {
  return (
    <section className="section sectionLine" id="the-room" aria-labelledby="access-title">
      <div className="container">
        <p className="eyebrow">TUF Networks / 02 — What you get</p>

        <figure className={styles.imageFrame}>
          <Image
            src={foundingCircleImage}
            alt="Members sharing ideas in a small group conversation around a table."
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            placeholder="blur"
            quality={82}
            className={styles.image}
          />
          <h2 id="access-title" className={`sectionTitle ${styles.imageTitle}`}>
            What you get <em>access to.</em>
          </h2>
        </figure>

        <div className={styles.grid}>
          {ITEMS.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className={styles.item} key={item.title}>
                <div className={styles.numberRow}>
                  <span className={styles.num} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.indicator} aria-hidden="true" />
                </div>
                <span className={styles.divider} aria-hidden="true" />
                <div className={styles.headingRow}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon strokeWidth={1.6} />
                  </span>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
                <p className={styles.description}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
