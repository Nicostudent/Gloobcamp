"use client";
import React, { useEffect } from "react";
import { Heading, Paragraph } from "@/components/Writing";
import JSConfetti from "js-confetti";
import { LinkButton } from "../LinkButton";
import ShareOnSocialMedia from "@/components/Dashboard/ShareOnSocialMedia";

const CompletedContent = ({ title }) => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    window.localStorage.removeItem(title);
    jsConfetti.addConfetti();
  }, [title]);

  return (
    <section className="flex flex-col justify-center items-center space-y-6 py-24 h-[calc(100vh-256px)]">
      <Heading addClass={"dark:text-white"}>{title}</Heading>

      <Paragraph
        addClass={"text-center flex flex-col max-w-xl dark:text-white"}
      >
        <span>{` Congratulations, you have completed all the topics of ${title}!`}</span>
        <span>{`You get a new achievement.`}</span>
        <span>{`we earese all your progress so you can start again`}</span>
        <span className="mt-4 font-light text-center text-xs">{`(you will not get an achievement next time.)`}</span>
      </Paragraph>
      <LinkButton dark href="/content" label={"View other contents"} />
      <ShareOnSocialMedia
        title={`I have just completed ${title} in Gloobcamp. Check it out!`}
        size={36}
      />
    </section>
  );
};

export default CompletedContent;
