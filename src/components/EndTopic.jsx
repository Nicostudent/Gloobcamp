import Link from "next/link";
import Paragraph from "./Writing/Paragraph";
import { LinkButton } from "./LinkButton";
const EndTopic = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center  absolute top-0 bottom-10 left-0 right-0 m-auto">      
        <Paragraph> Congratulations, you have completed this topic</Paragraph>
        <LinkButton  dark={true} href="/content" label={"Volver"} aria-label="back to homepage"/>
    </div>
  );
};
export default EndTopic;