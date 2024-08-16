"use client";
import { Heading, Paragraph } from "@/components/Writing";
import ContentCard from "@/components/ContentCard";

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8 my-12">
      <Heading addClass={"text-center"}>What do you want to learn now?</Heading>
      <Paragraph>Choose your content</Paragraph>

      <div className="flex md:flex-row flex-col flex-wrap justify-between items-center gap-8">
        <ContentCard image="/html.svg" subject="html">
          El Lenguaje de Marcado de Hipertexto (HTML) es el código que se
          utiliza para estructurar y desplegar una página web y sus contenidos
        </ContentCard>
        <ContentCard image="/css.svg" subject="css">
          CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo
          utilizado para describir la presentación de documentos HTML o XML.
        </ContentCard>
        <ContentCard image="/javascript.svg" subject="JavaScript">
          JavaScript es un lenguaje de programación orientado a objetos, basado
          en prototipos, imperativo, débilmente tipado y dinámico. Utilizado
          principalmente para desarrollar aplicaciones web.
        </ContentCard>
        <ContentCard image="/react.svg" subject="React">
          React es una biblioteca de JavaScript para la construcción de
          interfaces de usuario, declarativa, basada en componentes, eficiente y
          orientada a la creación de aplicaciones web interactivas.
        </ContentCard>
      </div>
    </section>
  );
};
export default page;
