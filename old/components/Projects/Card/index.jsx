// Dependencies
import DOMPurify from "dompurify";
import Image from "next/image";
import { PropTypes } from "prop-types";
// Local | React-Redux
import { useAppContext } from "../../../context/state";
// Styles


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
  const { app, projects } = useAppContext();
  const handleModal = () => {
    projects.setProject(project);
    app.toggleModal("projectinfo");
  };
  return (
    <div className={`card`}>
      <div className="card__imgs" onClick={() => window.open(url, "_blank")}>
      <Image
                          alt={`mobile vue of project ${title}`}
                          src={img_mobil}
                          width={175}
                          height={264}
                        />
                        <Image
                          alt={`desktop vue of project ${title}`}
                          src={img_deskot}
                          width={350}
                          height={247}
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
