import Paragraph from "./Writing/Paragraph";
import { LinkButton } from "./LinkButton";
const EndTopic = () => {
  return (
    <div className="top-0 right-0 bottom-10 left-0 absolute flex flex-col justify-center items-center gap-10 m-auto">
      <Paragraph> Congratulations, you have completed this topic</Paragraph>
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
