import {
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  LinkedinShareButton,
} from "react-share";
import { SubTitle } from "@/components/Writing";

const ShareOnSocialMedia = ({ title, size }) => {
  return (
    <article className="space-y-6">
      <SubTitle addClass="dark:text-white">Share on Social Media</SubTitle>
      <div className="flex justify-center gap-6">
        <TwitterShareButton url="https://gloobcamp.vercel.app/" title={title}>
          <XIcon size={size} round />
        </TwitterShareButton>

        <WhatsappShareButton url="https://gloobcamp.vercel.app/" title={title}>
          <WhatsappIcon size={size} round />
        </WhatsappShareButton>

        <LinkedinShareButton url="https://gloobcamp.vercel.app/" title={title}>
          <LinkedinIcon size={size} round />
        </LinkedinShareButton>
      </div>
    </article>
  );
};

export default ShareOnSocialMedia;
