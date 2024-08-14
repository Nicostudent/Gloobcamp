"use client";
import Heading from "@/components/Writing/Heading";
import { LinkButton } from "@/components/LinkButton";
import Paragraph from "@/components/Writing/Paragraph";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 h-[calc(100vh-128px)]">
      <Heading addClass={"text-center"}>What do you want to learn now?</Heading>
      <Paragraph>Choose your content</Paragraph>

      <div className="flex justify-between items-center gap-8">
        <LinkButton dark href={"/content/javascript"} label={"JavaScript"} />
        <LinkButton dark href={"/content/react"} label={"React"} />

      </div>
    </section>
  );
};
export default page;
