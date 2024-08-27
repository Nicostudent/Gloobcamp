import {
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookIcon,
  WhatsappIcon,
  LinkedinShareButton,
} from "react-share";

const ShareOnSocialMedia = ({ title, size }) => {
  return (
    <article>
      <TwitterShareButton url="https://gloobcamp.vercel.app/" title={title}>
        <XIcon size={size} round />
      </TwitterShareButton>

      <WhatsappShareButton url="https://gloobcamp.vercel.app/" title={title}>
        <WhatsappIcon size={size} round />
      </WhatsappShareButton>

      <LinkedinShareButton url="https://gloobcamp.vercel.app/" title={title}>
        <LinkedinIcon size={size} round />
      </LinkedinShareButton>
    </article>
  );
};

export default ShareOnSocialMedia;
