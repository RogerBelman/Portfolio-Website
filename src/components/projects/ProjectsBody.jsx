import projects from '../../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

function ProjectsBody(){

    return(
        <div className="ProjectsBody ListPage">
            <h1>Projects</h1>
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    );
}

export default ProjectsBody
