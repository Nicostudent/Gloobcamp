import {
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookIcon,
} from "react-share";

const ShareOnSocialMedia = ({ title }) => {
  return (
    <>
      <TwitterShareButton
        url="https://gloobcamp.vercel.app/"
        title={`He completado todos los temas de ${title} de GloobCamp`}
        className="Demo__some-network__share-button"
      >
        <XIcon size={32} round />
      </TwitterShareButton>
    </>
  );
};

export default ShareOnSocialMedia;
