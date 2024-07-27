import SectionContainer from "@/components/helpers/section-container";
import SectionWrapper from "@/components/helpers/section-wrapper";
import ProjectCard from "@/components/project-card";
import Title from "@/components/title";

export default function Page() {
  return (
    <div className="bg-[url('/line-01.svg')] bg-repeat min-h-screen w-full">
      <SectionContainer>
        <SectionWrapper>
          <Title>Projects</Title>
          <div className="grid max-[600px]:grid-cols-1 max-[800px]:grid-cols-2 grid-cols-3 gap-2 mt-8 ">
            <ProjectCard
              className="max-[800px]:col-span-1 col-span-2"
              href="/"
            />
            <ProjectCard href="/" />
            <ProjectCard href="/" />
            <ProjectCard
              className="max-[800px]:col-span-1 col-span-2"
              href="/"
            />
            <ProjectCard
              className="max-[800px]:col-span-1 col-span-2"
              href="/"
            />
            <ProjectCard href="/" />
            <ProjectCard href="/" />
            <ProjectCard
              className="max-[800px]:col-span-1 col-span-2"
              href="/"
            />
          </div>
        </SectionWrapper>
      </SectionContainer>
    </div>
  );
}
