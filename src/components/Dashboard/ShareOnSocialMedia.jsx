import {
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookIcon,
} from "react-share";

const ShareOnSocialMedia = ({ title }) => {
  return (
    <article>
      <TwitterShareButton
        url="https://gloobcamp.vercel.app/"
        title={`I have just completed ${title} in Gloobcamp. Check it out!`}
        className="Demo__some-network__share-button"
      >
        <XIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton></WhatsappShareButton>
    </article>
  );
};

export default ShareOnSocialMedia;
