// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
// Local | React-Redux
import { projectsData } from "@/data/projects";
// Styles
import Card from './Card';
import './projects.scss';
import SectionTitle from "../SectionTitle";
import { toggleProjectsIndex } from '@/actions/projects';

function Projects() {
    const dispatch = useDispatch();
    const { index } = useSelector((state) => state.projects);

    const slideLeft = () => {
        if (index - 1 >= 0) {
            dispatch(toggleProjectsIndex(index - 1));
        } else {
            dispatch(toggleProjectsIndex(projectsData.length - 1));
        }
    };

    const slideRight = () => {
        if (index + 1 <= projectsData.length - 1) {
            dispatch(toggleProjectsIndex(index + 1));
        } else {
            dispatch(toggleProjectsIndex(0));
        }
    };

    return (
        <div className="projects">
            <SectionTitle title="Projets" />
            <div className="projects__carousel">
                <BsChevronCompactLeft className="projects__carousel__chevron projects__carousel__chevron--prev" onClick={slideLeft} />
                {projectsData.map((project, n) => {
                    let position = n > index ? "next"
                        : n === index ? "active" : "prev";
                    return <Card key={n} {...project} cardStyle={position} />;
                })}
                <BsChevronCompactRight className="projects__carousel__chevron projects__carousel__chevron--next" onClick={slideRight} />
            </div>
        </div>
    );
}

export default Projects;
