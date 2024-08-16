"use client";
import { Heading, Paragraph } from "@/components/Writing";
import ContentCard from "@/components/ContentCard";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 my-12">
      <Heading addClass={"text-center dark:text-white"}>What do you want to learn now?</Heading>
      <Paragraph addClass="dark:text-white">Choose your content</Paragraph>

      <div className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-8">
        <ContentCard image="javascript" subject="JavaScript">
          JavaScript es un lenguaje de programación orientado a objetos, basado
          en prototipos, imperativo, débilmente tipado y dinámico. Utilizado
          principalmente para desarrollar aplicaciones web.
        </ContentCard>
        <ContentCard image="react" subject="React">
          React es una biblioteca de JavaScript para la construcción de
          interfaces de usuario, declarativa, basada en componentes, eficiente y
          orientada a la creación de aplicaciones web interactivas.
        </ContentCard>
      </div>
    </section>
  );
};
export default page;
