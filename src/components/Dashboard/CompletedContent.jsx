"use client";
import React, { useEffect } from "react";
import { Heading, Paragraph } from "@/components/Writing";
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
    <section className="flex h-[calc(100vh-256px)] flex-col items-center justify-center space-y-4 py-24">
      <Heading addClass={"dark:text-white"}>{title}</Heading>

      <Paragraph
        addClass={"text-center flex flex-col max-w-xl dark:text-white"}
      >
        <span>{` Congratulations, you have completed all the topics of ${title}!`}</span>
        <span>{`You get a new achievement.`}</span>
        <span>{`we earese all your progress so you can start again`}</span>
        <span className="mt-4 text-center text-xs font-light">{`(you will not get an achievement next time.)`}</span>
      </Paragraph>
      <LinkButton dark href="/content" label={"View other contents"} />
    </section>
  );
};

export default CompletedContent;
