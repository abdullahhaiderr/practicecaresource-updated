import { ServiceOverviewCard } from "@/components/service-overview-card";
import type { ServiceContent } from "@/data/services";

type RelatedServicesCarouselProps = {
  services: ServiceContent[];
};

function Cards({ services, clone = false }: RelatedServicesCarouselProps & { clone?: boolean }) {
  return (
    <div className="flex shrink-0 items-stretch gap-4 px-2 md:gap-5">
      {services.map((service) => (
        <div key={service.slug} className="flex w-[min(78vw,19rem)] shrink-0 md:w-[19rem]">
          <ServiceOverviewCard
            title={service.title}
            description={service.description}
            icon={service.icon}
            href={`/services/${service.slug}`}
            duplicate={clone}
          />
        </div>
      ))}
    </div>
  );
}

export function RelatedServicesCarousel({ services }: RelatedServicesCarouselProps) {
  if (services.length === 0) return null;

  const repeatedGroups = Array.from({ length: 7 }, (_, index) => index);

  return (
    <div
      className="related-services-marquee mx-auto mt-5 max-w-[60rem] overflow-hidden"
      role="region"
      aria-label="Related services carousel"
    >
      <div className="related-services-track flex w-max items-stretch py-3">
        <Cards services={services} />
        {repeatedGroups.map((group) => (
          <div
            key={group}
            aria-hidden="true"
            className="related-services-clone flex shrink-0"
          >
            <Cards services={services} clone />
          </div>
        ))}
      </div>
    </div>
  );
}
