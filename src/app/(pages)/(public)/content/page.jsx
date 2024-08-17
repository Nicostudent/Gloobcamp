"use client";
import { Heading, Paragraph } from "@/components/Writing";
import ContentCard from "@/components/ContentCard";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaReact } from "react-icons/fa";

const page = () => {
  return (
    <section className="my-12 flex flex-col items-center justify-center space-y-8">
      <Heading addClass={"text-center dark:text-white"}>
        What do you want to learn now?
      </Heading>
      <Paragraph addClass="dark:text-white">Choose your content</Paragraph>

      <div className="grid items-center justify-between gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ContentCard
          icon={<IoLogoHtml5 className="h-14 w-14 dark:text-white" />}
          subject="html"
        >
          El Lenguaje de Marcado de Hipertexto (HTML) es el código que se
          utiliza para estructurar y desplegar una página web y sus contenidos.
        </ContentCard>
        <ContentCard
          icon={<FaCss3Alt className="h-14 w-14 dark:text-white" />}
          subject="css"
        >
          CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo
          utilizado para describir la presentación de documentos HTML o XML.
        </ContentCard>
        <ContentCard
          icon={<IoLogoJavascript className="h-14 w-14 dark:text-white" />}
          subject="JavaScript"
        >
          JavaScript es un lenguaje de programación orientado a objetos, basado
          en prototipos, imperativo, débilmente tipado y dinámico. Utilizado
          principalmente para desarrollar aplicaciones web.
        </ContentCard>
        <ContentCard
          icon={<FaReact className="h-14 w-14 dark:text-white" />}
          subject="React"
        >
          React es una biblioteca de JavaScript para la construcción de
          interfaces de usuario, declarativa, basada en componentes, eficiente y
          orientada a la creación de aplicaciones web interactivas.
        </ContentCard>
      </div>
    </section>
  );
};
export default page;
