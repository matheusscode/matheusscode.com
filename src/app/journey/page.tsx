import SectionContainer from "@/components/helpers/section-container";
import SectionWrapper from "@/components/helpers/section-wrapper";
import JourneyCard from "@/components/journey-card";
import Title from "@/components/title";
import { journey } from "@/constants/journey";
import { PlusIcon } from "lucide-react";

export default function Page() {
  return (
    <SectionContainer>
      <div className="absolute inset-0 -z-10 h-screen w-full bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
      <SectionWrapper>
        <Title>Jornada</Title>
        <div className="mt-8">
          {journey.map((tour) => (
            <div
              key={`data_${tour.id}`}
              className="sticky top-10 bg-white max-[1000px]:top-20 flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
            >
              <div className="flex items-center">
                <h2 className="text-xl font-bold">{tour.date}</h2>
              </div>
              <section>
                <div
                  key={`data__log_}`}
                  className="relative flex pb-8 last:pb-0"
                >
                  <div className="absolute inset-0 flex w-6 items-center justify-center">
                    <div className="pointer-events-none h-full w-px border-l-[1px] border-gray-200" />
                  </div>
                  <div className="z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white">
                    <PlusIcon size={16} />
                  </div>
                  <div className="flex-grow pl-8">
                    <JourneyCard content={tour.content} />
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </SectionContainer>
  );
}
