// Dependencies
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

// Local | React-Redux
import { data } from "Data/data";
// Styles
import "./projectinfo.scss";

export function ProjectInfo() {
  const { project } = useSelector((state) => state.projects);
  const { language } = useSelector((state) => state.app);
  const displayedData = data[0][language];
  return (
    <div className="projectinfo">
      <a href={project.url} target="_blank" rel="noreferrer">
        <img
          src={project.logo}
          alt={`logo of ${project.title}`}
          className="projectinfo__logo"
        />
      </a>
      <div className="projectinfo__sep" />
      <div className="projectinfo__ctn">
        <div className="projectinfo__ctn__info projectinfo__ctn__info--desc">
          <h3 className="projectinfo__ctn__info__title">Description :</h3>
          <div
            className="projectinfo__ctn__info__text"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(project.descSupp),
            }}
          />
        </div>
        <div className="projectinfo__ctn__info projectinfo__ctn__info--proj">
          <h3 className="projectinfo__ctn__info__title">
            {displayedData.projects.title}
          </h3>
          <div className="projectinfo__ctn__info__text">
            {project.github && (
              <div className="projectinfo__ctn__info__text__para">
                <h4 className="projectinfo__ctn__info__text__subtitle">
                  Code :
                </h4>
                <a
                  className="projectinfo__ctn__info__text__link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {displayedData.projects.github}
                </a>
              </div>
            )}
            <div className="projectinfo__ctn__info__text__para">
              <h4 className="projectinfo__ctn__info__text__subtitle">
                {displayedData.projects.date}
              </h4>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(project.date),
                }}
              ></span>
            </div>
            <div className="projectinfo__ctn__info__text__para">
              <h4 className="projectinfo__ctn__info__text__subtitle">
                {displayedData.projects.context}
              </h4>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(project.context),
                }}
              ></span>
            </div>
            <div className="projectinfo__ctn__info__text__para">
              <h4 className="projectinfo__ctn__info__text__subtitle">
                {displayedData.projects.skills}
              </h4>
              <div className="projectinfo__ctn__info__text__skills">
                {project.skills &&
                  project.skills.map((skill) => {
                    return (
                      <span
                        className="projectinfo__ctn__info__text__skills__skill"
                        key={skill}
                      >
                        {skill}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
