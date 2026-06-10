import projects from '../../data/projects.js'
import AProject from './AProject.jsx'
import './ProjectsBody.css'

function ProjectsBody(){

    return(
        <div className="ProjectsBody">
            <h1>Projects</h1>
            {projects.map((project) => (
                <AProject key={project.name} {...project} />
            ))}
        </div>
    );
}

export default ProjectsBody
