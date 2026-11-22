import { ResourceCard, type ResourceCardData } from "@/components/resources/resource-card";

type RelatedResourcesCarouselProps = {
  articles: ResourceCardData[];
};

function CardSet({ articles, duplicate = false }: RelatedResourcesCarouselProps & { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-stretch gap-4 px-2 sm:gap-5">
      {articles.map((article) => (
        <div key={article.slug} className="w-[min(78vw,18.5rem)] shrink-0 sm:w-[18.5rem]">
          <ResourceCard article={article} compact duplicate={duplicate} />
        </div>
      ))}
    </div>
  );
}

export function RelatedResourcesCarousel({ articles }: RelatedResourcesCarouselProps) {
  if (articles.length === 0) return null;

  return (
    <div className="related-resources-marquee overflow-hidden" role="region" aria-label="Related resources carousel">
      <div className="related-resources-track flex w-max items-stretch py-3">
        <CardSet articles={articles} />
        {Array.from({ length: 7 }, (_, index) => (
          <div key={index} aria-hidden="true" className="related-resources-clone flex shrink-0">
            <CardSet articles={articles} duplicate />
          </div>
        ))}
      </div>
    </div>
  );
}
