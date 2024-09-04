import LabelWithCheckbox from "@/components/LabelWithCheckbox";
import { LinkButton } from "../LinkButton";
import Container from "@/components/Dashboard/Container";
import { useEffect, useState } from "react";

const Card = ({  topics, subject }) => {
  const [completedTopics, setCompletedTopics] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCompletedTopicsKey = `completedTopics_${subject}`;
      const storedCompletedTopics = JSON.parse(localStorage.getItem(storedCompletedTopicsKey)) || [];
      setCompletedTopics(storedCompletedTopics);
    }
  }, [subject]);

  return (
    <Container>
      {topics.map((topic) => (
        <LabelWithCheckbox
          key={topic.title}
          inputId={topic.id}
          isChecked={completedTopics.includes(topic.id)}
        >
          <LinkButton
            href={`/content/${subject}/${topic.path}`}
            label={`${topic.id}. ${topic.title}`}
          />
        </LabelWithCheckbox>
      ))}
    </Container>
  );
};

export default Card;
