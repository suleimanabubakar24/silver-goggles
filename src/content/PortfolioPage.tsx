import { PageHero, Reveal, Em } from "../components/ui";
import PortfolioGrid from "../components/Portfolio";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Selected work across design, print <Em>and web.</Em>
          </>
        }
        lead="Flyers, logos, business cards, posters, event designs, brochures, social media graphics, printed materials and website interfaces. Open any project for a closer look."
      />

      <section className="bg-black py-16 lg:py-24" aria-label="Portfolio gallery">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <Reveal>
            <PortfolioGrid filterable showCta />
          </Reveal>
        </div>
      </section>
    </>
  );
}
