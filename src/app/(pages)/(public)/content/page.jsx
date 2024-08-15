"use client";
import { Heading, Paragraph } from "@/components/Writing";
import ContentCard from "@/components/ContentCard";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 h-[calc(100vh-128px)]">
      <Heading addClass={"text-center"}>What do you want to learn now?</Heading>
      <Paragraph>Choose your content</Paragraph>

      <div className="flex justify-between items-center gap-8">
        <ContentCard image="/github-black.svg" subject="Github">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          quidem tempore esse dolore, obcaecati ducimus cum inventore optio
          ratione quod!
        </ContentCard>
      </div>
    </section>
  );
};
export default page;
