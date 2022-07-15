// Dependencies
import { useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import { PropTypes } from "prop-types";
// Local | React-Redux
// Styles
import "./card.scss";
import { toggleModal } from "Actions/app";
import { toggleProjectInfo } from "Actions/projects";

export function Card({
  title,
  url,
  img_mobil,
  img_deskot,
  desc,
  moreInfo,
  project,
  data,
}) {
  const dispatch = useDispatch();
  const handleModal = () => {
    dispatch(toggleProjectInfo(project));
    dispatch(toggleModal("projectinfo"));
  };
  return (
    <div className={`card`}>
      <div className="card__imgs" onClick={() => window.open(url, "_blank")}>
        <img
          src={`https://res.cloudinary.com/matthieu-munoz/image/upload/c_scale,h_566,w_376/${img_mobil}`}
          alt={`mobile vue of project ${title}`}
        />
        <img
          src={`https://res.cloudinary.com/matthieu-munoz/image/upload/c_scale,h_528,w_750/${img_deskot}`}
          alt={`mobile vue of project ${title}`}
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
  moreInfo: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired,
};
