import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { softwarePlatforms } from "@/data/software-platforms";
import { PlatformLogo } from "@/components/platforms/platform-logo";

function PlatformMarqueeRow({
  platforms,
  reverse = false,
  label,
}: {
  platforms: typeof softwarePlatforms;
  reverse?: boolean;
  label: string;
}) {
  const trackClassName = reverse
    ? "software-platform-marquee__track software-platform-marquee__track--reverse"
    : "software-platform-marquee__track";

  const renderCards = (clone = false) => (
    <ul className="flex w-max shrink-0 items-center gap-4 pr-4" aria-hidden={clone || undefined}>
      {platforms.map((platform) => (
        <li
          key={(clone ? "copy-" : "") + platform.id}
          className="flex h-[4.8rem] w-[11.5rem] shrink-0 items-center justify-center rounded-xl border border-brand-accent/20 bg-brand-background px-4 shadow-sm sm:w-[12.5rem]"
        >
          <PlatformLogo platform={platform} compact />
          {!clone ? <span className="sr-only">{platform.name}</span> : null}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="software-platform-marquee overflow-hidden py-1"
      role="region"
      aria-label={label}
      tabIndex={0}
    >
      <div className={trackClassName}>
        {renderCards()}
        <div className="software-platform-marquee__clone" aria-hidden="true">
          {renderCards(true)}
        </div>
      </div>
    </div>
  );
}

export function SoftwarePlatformsSection() {
  const firstRow = softwarePlatforms.slice(0, 8);
  const secondRow = softwarePlatforms.slice(8);

  return (
    <section
      className="overflow-hidden border-y border-brand-border/70 bg-brand-background-wash/35 py-12 sm:py-14 lg:py-16"
      aria-labelledby="software-platforms-home-heading"
    >
      <Container>
        <SectionHeading
          align="center"
          eyebrow="EHR · EMR · RCM Platforms"
          title={
            <>
              Experienced across{" "}
              <span className="text-brand-accent-ink">
                leading EHR, EMR &amp; RCM platforms.
              </span>
            </>
          }
          description="Our team works across leading EHR, EMR, clearinghouse, and revenue cycle platforms used by modern healthcare practices."
          className="mb-8 sm:mb-10"
        />
      </Container>

      <div className="space-y-4">
        <PlatformMarqueeRow platforms={firstRow} label="EHR and EMR software logos, first row" />
        <PlatformMarqueeRow
          platforms={secondRow}
          reverse
          label="Practice management and workspace software logos, second row"
        />
      </div>

      <Container>
        <div className="mt-8 flex justify-center">
          <Button href="/software-platforms" size="lg" showArrow>
            Need support with your billing software?
          </Button>
        </div>
      </Container>
    </section>
  );
}
