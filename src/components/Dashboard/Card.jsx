import LabelWithCheckbox from "@/components/LabelWithCheckbox";
import { LinkButton } from "../LinkButton";
import Container from "@/components/Dashboard/Container";

const Card = ({ handleCheckboxChange, topics, selectedTopics }) => {
  return (
    <Container>
      {topics.map((topic) => (
        <LabelWithCheckbox
          key={topic.id}
          inputId={topic.id}
          handleChange={handleCheckboxChange} // Pass as handleChange
          isChecked={!!selectedTopics[topic.id]}
        >
          <LinkButton
            href={`/content/javascript/${topic.path}`}
            label={`${topic.id}. ${topic.title}`}
          />
        </LabelWithCheckbox>
      ))}
    </Container>
  );
};

export default Card;
