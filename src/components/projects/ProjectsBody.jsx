import projects from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import './ProjectsBody.css'

function ProjectsBody(){

    return(
        <div className="ProjectsBody">
            <h1>Projects</h1>
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    );
}

export default ProjectsBody
