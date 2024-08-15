"use client";
import React, { useEffect } from "react";
import Heading from "@/components/Writing/Heading";
import Paragraph from "@/components/Writing/Paragraph";
import JSConfetti from "js-confetti";
import { LinkButton } from "../LinkButton";

const CompletedContent = ({ title }) => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    window.localStorage.removeItem(title);
    window.localStorage.removeItem("selectedTopics" + title);
    jsConfetti.addConfetti();
  });

  return (
    <section className="flex flex-col justify-center   items-center space-y-4 py-24 h-[calc(100vh-256px)]">
      <Heading>{title}</Heading>

      <Paragraph addClass={"text-center flex flex-col max-w-xl   "}>
        <span>{` Congratulations, you have completed all the topics of ${title}!`}</span>
        <span>{`You get a new achievement.`}</span>
        <span>{`we earese all your progress so you can start again`}</span>
        <span className="font-light text-xs text-center mt-4">{`(you will not get an achievement next time.)`}</span>
      </Paragraph>
      <LinkButton dark href="/content" label={"View other contents"} />
    </section>
  );
};

export default CompletedContent;
