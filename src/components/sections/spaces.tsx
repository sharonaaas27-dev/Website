import { CardGrid } from "@/components/ui/card-grid";
import { MediaCard } from "@/components/ui/media-card";
import { SectionHeading } from "@/components/ui/section-heading";

import blendImage from "@/assets/images/kappiness.jpg";
import studioImage from "@/assets/images/kopra2.png";
import commonsImage from "@/assets/images/Neoito.png";

export function Spaces() {
  return (
    <section className="section" id="spaces" aria-labelledby="spaces-title">
      <div className="container">
        <SectionHeading
          eyebrow="TUF Networks / 05 — Partner spaces"
          id="spaces-title"
          title={
            <>
              Partner spaces. <em>Where it happens.</em>
            </>
          }
          lede="Curated cafés, coworking spaces and gathering places designed for meaningful conversations."
        />

        <CardGrid>
          <MediaCard
            image={blendImage}
            alt="A minimalist café with warm lighting and wooden tables."
            kicker="Café & workspace"
            title="Kappiness"
            description="A curated café and workspace for founders and operators."
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            partner
          />
          <MediaCard
            image={studioImage}
            alt="A bright, plant-filled coworking space with open-plan desks."
            kicker="Coworking studio"
            title="Kopra"
            description="A curated coworking space for founders and operators."
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            partner
          />
          <MediaCard
            image={commonsImage}
            alt="A spacious event hall with exposed brick, warm lighting and round tables."
            kicker="Technology commons"
            title="Neoito"
            description="A curated technology commons for founders and operators."
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            partner
          />
        </CardGrid>
      </div>
    </section>
  );
}
