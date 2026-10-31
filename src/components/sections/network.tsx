import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

import styles from "./network.module.css";

// Reuse the eight existing People section photos
import arun from "@/assets/images/Peoples/Arun_Kumar.webp";
import asmit from "@/assets/images/Peoples/Asmit Banik .webp";
import faiz from "@/assets/images/Peoples/Faiz Mohamed Haneef.webp";
import narayanan from "@/assets/images/Peoples/Narayanan nair krishnamoorthy.webp";
import prabin from "@/assets/images/Peoples/Prabin P Biaetreese.webp";
import robin from "@/assets/images/Peoples/Robin Alex Panicker .webp";
import rugmani from "@/assets/images/Peoples/Rugmani Meenambal.webp";
import sruthy from "@/assets/images/Peoples/Sruthy Noreen Lal.webp";

const NODES = [
  { label: "Founders", image: arun },
  { label: "Builders", image: asmit },
  { label: "Creators", image: faiz },
  { label: "Operators", image: narayanan },
  { label: "Companies", image: prabin },
  { label: "Investors", image: robin },
  { label: "TUF Students", image: rugmani },
  { label: "Alumni", image: sruthy },
] as const;

export function Network() {
  return (
    <section
      className="section"
      id="network"
      aria-labelledby="network-title"
    >
      <div className={`container ${styles.grid}`}>

        {/* LEFT CONTENT */}
        <div className={styles.copy}>
          <SectionHeading
            eyebrow="TUF Networks / 07 — The network"
            id="network-title"
            title={
              <>
                One room. <em>Many possibilities.</em>
              </>
            }
            lede="Every person in the network connects to every other — creating a living ecosystem of founders, builders, creators, operators and companies."
            tight
          />

          <p className={styles.note}>
            Eight roles. One connected room.
          </p>
        </div>

        {/* RIGHT NETWORK DIAGRAM */}
        <div className={styles.orbitWrap}>
          <div
            className={styles.orbit}
            role="group"
            aria-label="TUF Networks connects eight roles"
          >
            {/* CONNECTION LINES */}
            <svg
              className={styles.lines}
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <line x1="50" y1="50" x2="50" y2="6" />
              <line x1="50" y1="50" x2="88" y2="20" />
              <line x1="50" y1="50" x2="94" y2="50" />
              <line x1="50" y1="50" x2="88" y2="80" />
              <line x1="50" y1="50" x2="50" y2="94" />
              <line x1="50" y1="50" x2="12" y2="80" />
              <line x1="50" y1="50" x2="6" y2="50" />
              <line x1="50" y1="50" x2="12" y2="20" />
            </svg>

            {/* CIRCULAR RINGS */}
            <div
              className={`${styles.ring} ${styles.ringOuter}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.ring} ${styles.ringInner}`}
              aria-hidden="true"
            />

            {/* CENTER LOGO */}
            <div className={styles.core} aria-label="TUF Networks">
              <span>TUF</span>
              <strong>NETWORKS</strong>
            </div>

            {/* PROFILE NODES */}
            <ul className={styles.nodes}>
              {NODES.map((node) => (
                <li className={styles.node} key={node.label}>
                  <div className={styles.nodeContent}>
                    <div className={styles.avatar}>
                      <Image
                        src={node.image}
                        alt=""
                        fill
                        sizes="64px"
                        className={styles.avatarImage}
                      />
                    </div>

                    <span className={styles.nodeLabel}>
                      {node.label}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}