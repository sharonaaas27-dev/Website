import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";

import heroImage from "@/assets/images/hero-dinner-1280.webp";

import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          preload
          quality={82}
          className={styles.image}
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={cn("container", styles.inner)}>
        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <p className={cn("eyebrow", styles.eyebrow)}>
              <span className="eyebrowLine" aria-hidden="true" />
              TUF Networks
            </p>
            <p className={styles.statusPill}>
              <span className={styles.statusDot} aria-hidden="true" />
              The room is being built
            </p>
          </div>

          <h1 id="hero-title" className={styles.title}>
            <span>The right</span>{" "}
            <span>
              <em>room</em> changes
            </span>{" "}
            <span>everything.</span>
          </h1>

          <p className={styles.lede}>
            An invite- only community curated for students, freelancers to 
            access founders , operators , leaders and creators through ideas, 
            exeperiences and meaningful conversations
          </p>

          <div className={styles.actions}>
            <ButtonLink href="#apply">
              Request an invitation
              <ArrowRight aria-hidden="true" strokeWidth={1.8} />
            </ButtonLink>
            <ButtonLink href="#the-room" variant="ghost">
              Explore the network
              <ArrowDown aria-hidden="true" strokeWidth={1.8} />
            </ButtonLink>
          </div>

    
        </div>
      </div>

      <a className={styles.scroll} href="#about" aria-label="Scroll to the idea">
       
        
      </a>
    </section>
  );
}
