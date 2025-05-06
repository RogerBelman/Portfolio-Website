import AProject from './AProject.jsx'
import './ProjectsBody.css'

function ProjectsBody(){

    return(
        <div className="ProjectsBody">
            <h1>Projects</h1>
            <AProject 
                name="Portfolio Website" 
                skills="React, React Router, VPS (DigitalOcean), SSL, Custom Domain" 
                link="https://github.com/RogerBelman/Portfolio-Website.git" 
                description={
                    "Developed a responsive portfolio website using React and React Router.\n" +
                    "Used GitHub for version control and VS Code for development.\n" +
                    "Deployed to a VPS (rogerbelman.com) with SSL for secure HTTPS access."
                } 
                image={null}>
            </AProject>

        </div>
    );
}

export default ProjectsBody
