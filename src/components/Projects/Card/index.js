// Dependencies
import { useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
// Local | React-Redux
// Styles
import "./card.scss";
import { toggleModal } from "@/actions/app";
import { toggleProjectInfo } from "@/actions/projects";

function Card({
  title,
  url,
  img_mobil,
  img_deskot,
  desc,
  cardStyle,
  handlePointerEvent,
  moreInfo,
  project,
  data,
}) {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(toggleProjectInfo(project));
    dispatch(toggleModal("projectinfo"));
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: "matthieu-munoz",
    },
  });

  const mobileImg = cld.image(img_mobil);
  const desktopImg = cld.image(img_deskot);
  mobileImg.resize(fill(376, 566)).format("webp").quality(100);
  desktopImg.resize(fill(750, 528)).format("webp").quality(100);

  return (
    <div
      className={`card card__${cardStyle}`}
      onMouseDown={handlePointerEvent}
      onTouchStart={handlePointerEvent}
    >
      <div className="card__imgs" onClick={() => window.open(url, "_blank")}>
        <AdvancedImage
          loading="lazy"
          alt={`mobile vue of project ${title}`}
          cldImg={mobileImg}
          plugins={[lazyload(), placeholder({ mode: "blur" })]}
        />
        <AdvancedImage
          loading="lazy"
          alt={`desktop vue of project ${title}`}
          cldImg={desktopImg}
          plugins={[lazyload(), placeholder({ mode: "blur" })]}
        />
      </div>
      <a href={url} target="blank" className="card__link">
        {title}
      </a>
      <div className="card__sep" />
      <div
        className="card__desc"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }}
      />
      {moreInfo && (
        <div className="card__modal" onClick={handleModal}>
          {data.about}
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  img_mobil: PropTypes.string,
  img_deskot: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cardStyle: PropTypes.string.isRequired,
  moreInfo: PropTypes.bool.isRequired,
  handlePointerEvent: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

export default Card;
