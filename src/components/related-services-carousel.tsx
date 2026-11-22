import { ServiceCard } from "@/components/service-card";
import type { ServiceContent } from "@/data/services";

type RelatedServicesCarouselProps = {
  services: ServiceContent[];
};

function Cards({ services }: RelatedServicesCarouselProps) {
  return (
    <div className="flex shrink-0 gap-4 px-2 md:gap-5">
      {services.map((service) => (
        <div key={service.slug} className="w-[min(78vw,19rem)] shrink-0 md:w-[19rem]">
          <ServiceCard
            compact
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            icon={service.icon}
            href={`/services/${service.slug}`}
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
    <div className="related-services-marquee mt-5 overflow-hidden" role="region" aria-label="Related services carousel">
      <div className="related-services-track flex w-max items-stretch py-3">
        <Cards services={services} />
        {repeatedGroups.map((group) => (
          <div key={group} aria-hidden="true" inert className="related-services-clone flex shrink-0">
            <Cards services={services} />
          </div>
        ))}
      </div>
    </div>
  );
}
