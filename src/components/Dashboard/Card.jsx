import LabelWithCheckbox from "@/components/LabelWithCheckbox";
import { LinkButton } from "../LinkButton";
import Container from "@/components/Dashboard/Container";

const Card = ({ handleCheckboxChange, topics, selectedTopics ,subject }) => {
  return (
    <Container>
      {topics.map((topic) => (
        <LabelWithCheckbox
          key={topic.title}
          inputId={topic.id}
          handleChange={handleCheckboxChange}
          isChecked={!!selectedTopics[topic.id]}
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
