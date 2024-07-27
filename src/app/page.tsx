import SectionContainer from "@/components/helpers/section-container";
import SectionWrapper from "@/components/helpers/section-wrapper";
import Title from "@/components/title";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { jobs } from "@/constants/jobs";
import Link from "next/link";

export default function Page() {
  return (
    <SectionContainer>
      <SectionWrapper className="flex flex-col gap-y-8 ">
        <Title>About me.</Title>
        <div className="flex flex-col gap-6 font-normal text-lg">
          <h1>
            Hello 👋, my name is Matheus{" "}
            {"(What does God's Gift mean in Portuguese?)"}, Engineer Software,
            musician, teacher, minimalist and CEO of Signalize in Genius
            Foundation, which lives in the city of Manaus - Amazonas, Brazil.
          </h1>
        </div>

        <div className="flex flex-col gap-4 mt-8 w-full">
          <Title className="text-2xl">Previous work</Title>
          <Table className="text-base font-semibold font-sans">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px] px-4">Company</TableHead>
                <TableHead className="w-[300px] px-4">Office</TableHead>
                <TableHead className="w-[300px] px-4">
                  Beginning and end
                </TableHead>
                <TableHead className="w-[70px] px-4 text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="p-2 whitespace-nowrap overflow-x-scroll">
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="px-4 py-3 font-medium">
                    {job.company}
                  </TableCell>
                  <TableCell className="px-4 py-3 font-medium">
                    {job.office}
                  </TableCell>
                  <TableCell className="px-4 py-3 font-medium">
                    {job.beginning_and_end}
                  </TableCell>
                  <TableCell className="px-4 py-3 font-medium">
                    <Link className="text-blue-500 underline " href={job.route}>
                      {job.route}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption className="py-3">
              I worked on them all with all the affection and gratitude in the
              world. ❤️
            </TableCaption>
          </Table>
        </div>
      </SectionWrapper>
    </SectionContainer>
  );
}
