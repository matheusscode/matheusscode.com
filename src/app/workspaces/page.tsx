import SectionContainer from "@/components/container/section-container";
import SectionWrapper from "@/components/container/section-wrapper";
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
import { workspace } from "@/constants/workspace";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative h-full">
      <SectionContainer>
        <SectionWrapper className="flex flex-col gap-3">
          <Title className="font-sans">Workspace</Title>
          <div className="rounded-lg border border-solid border-gray-200 overflow-hidden"></div>
          <Table className="text-base font-semibold font-sans">
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[300px] px-4">Product</TableHead>
                <TableHead className="min-w-[300px] px-4">Specs</TableHead>
                <TableHead className="min-w-[70px] px-4 text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="p-2 overflow-x-scroll">
              {workspace.map((row) => (
                <TableRow key={`workspace-item-${row.id}`}>
                  <TableCell className="px-4 py-3 font-medium">
                    {row.product}
                  </TableCell>
                  <TableCell className="px-4 py-3">{row.spec}</TableCell>
                  <TableCell className="px-4 py-3 font-medium">
                    <Link
                      target="_blank"
                      className="text-blue-500"
                      href={row.buy_path}
                    >
                      Buy
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption className="py-3">
              For other cool stuff, don&lsquo;t forget to check{" "}
              <a
                href="https://some.wtf"
                className="link break-words after:content-['_↗']"
                target="_blank"
                rel="noopener noreferrer"
              >
                some.wtf
              </a>
            </TableCaption>
          </Table>
        </SectionWrapper>
      </SectionContainer>
    </div>
  );
}
