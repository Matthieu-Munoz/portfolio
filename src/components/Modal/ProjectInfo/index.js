// Dependencies
import { useSelector } from 'react-redux';

// React-Redux

// Styles
import "./projectinfo.scss"


function ProjectInfo() {
    const { project } = useSelector((state) => state.projects);
    console.log(project);
    return (
        <div className="projectinfo">

        </div>
    );
}

export default ProjectInfo;
