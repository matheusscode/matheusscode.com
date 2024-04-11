import SectionContainer from "@/components/container/section-container";
import SectionWrapper from "@/components/container/section-wrapper";
import Title from "@/components/title";
import { groupStack } from "@/constants/stack";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative h-full">
      <div className="fixed left-12 top-0 -z-10 h-full w-full bg-transparent">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
      </div>
      <SectionContainer>
        <SectionWrapper>
          <Title>Stack</Title>
          {groupStack.map((group) => (
            <nav key={group.id} className="py-8">
              <h1 className="text-xl font-semibold mb-4">{group.groupName}</h1>
              <ul className="list-disc flex pl-8 flex-col gap-2">
                {group.techs.map((tech) => (
                  <li className="text-lg" key={tech.name}>
                    <Link
                      className="hover:underline text-blue-600"
                      href={tech.path}
                    >
                      {tech.name}
                    </Link>{" "}
                    - <span>{tech.description}</span>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </SectionWrapper>
      </SectionContainer>
    </div>
  );
}
