import Paragraph from "./Writing/Paragraph";
import { LinkButton } from "./LinkButton";
const EndTopic = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Paragraph> Congratulations, you have completed this topic! and get a new achievement</Paragraph>
      <LinkButton
        dark={true}
        href="/content"
        label={"Volver"}
        aria-label="back to homepage"
      />
    </div>
  );
};
export default EndTopic;
