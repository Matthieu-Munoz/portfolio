// Dependencies
import { useSelector } from 'react-redux';
import DOMPurify from "dompurify";


// React-Redux

// Styles
import "./projectinfo.scss"


function ProjectInfo() {
    const { project } = useSelector((state) => state.projects);
    return (
        <div className="projectinfo">
            <a href={project.url} target="_blank" rel="noreferrer" ><img src={project.logo} alt={`logo of ${project.title}`} className="projectinfo__logo" /></a>
            <div className="projectinfo__sep" />
            <div className="projectinfo__ctn">
                <div className="projectinfo__ctn__info projectinfo__ctn__info--desc">
                    <h3 className="projectinfo__ctn__info__title">Description :</h3>
                    <div className="projectinfo__ctn__info__text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.descSupp) }} />
                </div>
                <div className="projectinfo__ctn__info projectinfo__ctn__info--proj">
                    <h3 className="projectinfo__ctn__info__title">Le projet :</h3>
                    <div className="projectinfo__ctn__info__text">
                        {project.github && <div className="projectinfo__ctn__info__text__para">
                            <h4 className="projectinfo__ctn__info__text__subtitle">Code :</h4><a className="projectinfo__ctn__info__text__link" href={project.github} target="_blank" rel="noreferrer">Lien GitHub</a>
                        </div>}
                        <div className="projectinfo__ctn__info__text__para">
                            <h4 className="projectinfo__ctn__info__text__subtitle">Date de réalisation :</h4><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.date) }} ></span>
                        </div>
                        <div className="projectinfo__ctn__info__text__para">
                            <h4 className="projectinfo__ctn__info__text__subtitle">Contexte :</h4><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.context) }} ></span>
                        </div>
                        <div className="projectinfo__ctn__info__text__para">
                            <h4 className="projectinfo__ctn__info__text__subtitle">Compétences utilisées :</h4>
                            <div className="projectinfo__ctn__info__text__skills">
                                {project.skills && project.skills.map((skill) => {
                                    return <span className="projectinfo__ctn__info__text__skills__skill" key={skill}>{skill}</span>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfo;
