
"use client";

import Image from "next/image";
import styles from "./people.module.css";

import ananya from "@/assets/images/Peoples/Arun_Kumar.webp";
import rahul from "@/assets/images/Peoples/Asmit Banik .webp";
import diana from "@/assets/images/Peoples/Faiz Mohamed Haneef.webp";
import arjun from "@/assets/images/Peoples/Narayanan nair krishnamoorthy.webp";
import meera from "@/assets/images/Peoples/Prabin P Biaetreese.webp";
import vikram from "@/assets/images/Peoples/Robin Alex Panicker .webp";
import shreya from "@/assets/images/Peoples/Rugmani Meenambal.webp";
import rohan from "@/assets/images/Peoples/Sruthy Noreen Lal.webp";

const people = [
  {
    name: "Arun Kumar",
    profession:
      "Co-Founder at Chaaikari and Founder at Ushasfire Technocraft",
    image: ananya,
  },
  {
    name: "Asmit Banik",
    profession: "Co-Founder at Supymem",
    image: rahul,
  },
  {
    name: "Faiz Mohamed Haneef",
    profession:
      "Angel VC at Malabar Angel Networks and Founder & CEO at Neoitio",
    image: diana,
  },
  {
    name: "Narayanan Nair Krishnamoorthy",
    profession:
      "Founder at Varada Innovate and Mentor at KSUM, AIICTK",
    image: arjun,
  },
  {
    name: "Prabin P Biaetreese",
    profession:
      "Founder at Nadi India and Kappiness Mental Health Cafe",
    image: meera,
  },
  {
    name: "Robin Alex Panicker",
    profession:
      "Angel Investor at Unicorn India Ventures, Founder at Appxiom and MD at ImageQ",
    image: vikram,
  },
  {
    name: "Rugmani Meenambal",
    profession:
      "Co-Founder at Qurocare and Ex-Assistant Professor at Christ University",
    image: shreya,
  },
  {
    name: "Sruthy Noreen Lal",
    profession:
      "Co-Founder & MD at Lollipopz and Ex-Technology Architect at Infosys",
    image: rohan,
  },
];

export function People() {
  return (
    <section className={styles.peopleSection} id="people">
      <div className={styles.peopleContainer}>

        {/* SECTION HEADING */}
        <div className={styles.headingContainer}>
          <span className={styles.eyebrow}>
            THE PEOPLE BEHIND THE NETWORK
          </span>

          <h2 className={styles.title}>
            <span>WHO&apos;S INSIDE</span>
            <span className={styles.room}>THE ROOM.</span>
          </h2>

          <p className={styles.description}>
            A curated network of founders, builders, creators and
            operators shaping ideas, building businesses and creating
            meaningful impact.
          </p>
        </div>

        {/* PEOPLE GRID */}
        <div className={styles.portraitGrid}>
          {people.map((person) => (
            <article className={styles.profile} key={person.name}>

              {/* PROFILE IMAGE */}
              <div className={styles.imageWrapper}>
                <Image
                  src={person.image}
                  alt={`${person.name} portrait`}
                  width={600}
                  height={600}
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 20vw"
                  className={styles.portraitImage}
                />
              </div>

              {/* NAME AND PROFESSION BELOW IMAGE */}
              <div className={styles.profileText}>
                <h3 className={styles.name}>
                  {person.name}
                </h3>

                <p className={styles.profession}>
                  {person.profession}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default People;
