"use client";
import React, { useEffect } from "react";
import Heading from "@/components/Writing/Heading";
import Paragraph from "@/components/Writing/Paragraph";
import JSConfetti from "js-confetti";
import { LinkButton } from "../LinkButton";

const CompletedContent = ({ title }) => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    window.localStorage.removeItem("progress");
    window.localStorage.removeItem("storagedValue");
    jsConfetti.addConfetti();
  }, []); // Ensure this runs only once

  return (
    <section className="flex flex-col justify-center items-center space-y-4 py-24 h-[calc(100vh-256px)]">
      <Heading>{title}</Heading>
      <Paragraph>
        Congratulations, you have completed all the topics of {title}!
      </Paragraph>
      <LinkButton dark href="/content" label={"View other contents"} />
    </section>
  );
};

export default CompletedContent;
