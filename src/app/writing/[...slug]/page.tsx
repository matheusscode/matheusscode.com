import BlogContainer from "@/components/helpers/blog-container";
import SectionContainer from "@/components/helpers/section-container";
import SectionWrapper from "@/components/helpers/section-wrapper";

interface Page {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Page) {
  return (
    <BlogContainer icon="writing">
      <SectionContainer>
        <SectionWrapper>{params.slug}</SectionWrapper>
      </SectionContainer>
    </BlogContainer>
  );
}
