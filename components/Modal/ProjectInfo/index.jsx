// Dependencies
import DOMPurify from "dompurify";
// Local | React-Redux
import Image from "next/image";
import { data } from "../../../data/data";
import { useAppContext } from "../../../context/state";
// Styles

export function ProjectInfo() {
  const { app, projects } = useAppContext();
  const displayedData = data[0][app.language];

  return (
    <div className="projectinfo">
      <a href={projects.project.url} target="_blank" rel="noreferrer">
        <Image
                          alt={`logo of ${projects.project.title}`}
                          src={projects.project.logo}
                          width={120}
                          height={120}
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
              __html: DOMPurify.sanitize(projects.project.descSupp),
            }}
          />
        </div>
        <div className="projectinfo__ctn__info projectinfo__ctn__info--proj">
          <h3 className="projectinfo__ctn__info__title">
            {displayedData.projects.title}
          </h3>
          <div className="projectinfo__ctn__info__text">
            {projects.project.github && (
              <div className="projectinfo__ctn__info__text__para">
                <h4 className="projectinfo__ctn__info__text__subtitle">
                  Code :
                </h4>
                <a
                  className="projectinfo__ctn__info__text__link"
                  href={projects.project.github}
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
                  __html: DOMPurify.sanitize(projects.project.date),
                }}
              ></span>
            </div>
            <div className="projectinfo__ctn__info__text__para">
              <h4 className="projectinfo__ctn__info__text__subtitle">
                {displayedData.projects.context}
              </h4>
              <span
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(projects.project.context),
                }}
              ></span>
            </div>
            <div className="projectinfo__ctn__info__text__para">
              <h4 className="projectinfo__ctn__info__text__subtitle">
                {displayedData.projects.skills}
              </h4>
              <div className="projectinfo__ctn__info__text__skills">
                {projects.project.skills &&
                  projects.project.skills.map((skill) => {
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
