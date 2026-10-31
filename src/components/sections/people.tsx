
import Image, { type StaticImageData } from "next/image";
import styles from "./people.module.css";
import { cn } from "@/lib/cn";

import ananya from "@/assets/images/Peoples/Arun_Kumar.webp";
import rahul from "@/assets/images/Peoples/Asmit Banik .webp";
import diana from "@/assets/images/Peoples/Faiz Mohamed Haneef.webp";
import arjun from "@/assets/images/Peoples/Narayanan nair krishnamoorthy.webp";
import meera from "@/assets/images/Peoples/Prabin P Biaetreese.webp";
import vikram from "@/assets/images/Peoples/Robin Alex Panicker .webp";
import shreya from "@/assets/images/Peoples/Rugmani Meenambal.webp";
import rohan from "@/assets/images/Peoples/Sruthy Noreen Lal.webp";

// =========================================
// PROFILE TYPE
// =========================================

type Profile = {
  name: string;
  profession: string;
  src: StaticImageData;
  alt: string;
};

// =========================================
// PROFILE DATA
// =========================================

const PROFILES: Profile[] = [
  {
    name: "Arun Kumar",
    profession:
      "Co-Founder, Chaaikari · Founder, Ushasfire Technocraft",
    src: ananya,
    alt: "Arun Kumar, Co-Founder of Chaaikari and Founder of Ushasfire Technocraft",
  },
  {
    name: "Asmit Banik",
    profession: "Co-Founder, Supymem",
    src: rahul,
    alt: "Asmit Banik, Co-Founder of Supymem",
  },
  {
    name: "Faiz Mohamed Haneef",
    profession:
      "Angel VC, Malabar Angel Networks · Founder & CEO, Neoitio",
    src: diana,
    alt: "Faiz Mohamed Haneef, Angel VC at Malabar Angel Networks and Founder and CEO of Neoitio",
  },
  {
    name: "Narayanan Nair Krishnamoorthy",
    profession:
      "Founder, Varada Innovate · Mentor, KSUM & AIICTK",
    src: arjun,
    alt: "Narayanan Nair Krishnamoorthy, Founder of Varada Innovate and Mentor at KSUM and AIICTK",
  },
  {
    name: "Prabin P Biaetreese",
    profession:
      "Founder, Nadi India · Kappiness Mental Health Cafe",
    src: meera,
    alt: "Prabin P Biaetreese, Founder of Nadi India and Kappiness Mental Health Cafe",
  },
  {
    name: "Robin Alex Panicker",
    profession:
      "Angel Investor, Unicorn India Ventures · Founder, Appxiom · MD, ImageQ",
    src: vikram,
    alt: "Robin Alex Panicker, Angel Investor at Unicorn India Ventures, Founder of Appxiom and MD of ImageQ",
  },
  {
    name: "Rugmani Meenambal",
    profession:
      "Co-Founder, Qurocare · Former Assistant Professor, Christ University",
    src: shreya,
    alt: "Rugmani Meenambal, Co-Founder of Qurocare and Former Assistant Professor at Christ University",
  },
  {
    name: "Sruthy Noreen Lal",
    profession:
      "Co-Founder & MD, Lollipopz · Former Technology Architect, Infosys",
    src: rohan,
    alt: "Sruthy Noreen Lal, Co-Founder and MD of Lollipopz and Former Technology Architect at Infosys",
  },
  
];

// =========================================
// PEOPLE SECTION
// =========================================

export function People() {
  return (
    <section
      className={cn("section", styles.peopleSection)}
      id="people"
      aria-labelledby="people-title"
    >
      <div className={cn("container", styles.peopleContainer)}>

        {/* SECTION HEADING */}

        <header className={styles.headingContainer}>
          <p className={cn("eyebrow", styles.eyebrow)}>
            TUF NETWORKS / 004
          </p>

          <h2
            className={styles.title}
            id="people-title"
          >
            <span>WHO&apos;S INSIDE</span>

            <span>
              <em className={styles.room}>THE ROOM.</em>
            </span>
          </h2>

          <p className={styles.description}>
            A diverse collection of ambitious people. Founders.
            Builders. Creators. Operators. Professionals.
            People who think differently and expect more.
          </p>
        </header>

        {/* PROFILE GRID */}

        <div
          className={styles.portraitGrid}
          aria-label="People in TUF Networks"
        >
          {PROFILES.map((profile) => (
            <article
              key={profile.name}
              className={styles.profile}
            >
              {/* NAME AND PROFESSION */}

              <div className={styles.profileText}>
                <h3 className={styles.name}>
                  {profile.name}
                </h3>

                <p className={styles.profession}>
                  {profile.profession}
                </p>
              </div>

              {/* PROFILE IMAGE */}

              <Image
                src={profile.src}
                alt={profile.alt}
                className={styles.portraitImage}
                width={800}
                height={800}
                sizes="
                  (max-width: 767px) 50vw,
                  (max-width: 1023px) 33vw,
                  25vw
                "
                loading="lazy"
              />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
