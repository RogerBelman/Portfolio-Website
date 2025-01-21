import AProject from './AProject.jsx'
import './ProjectsBody.css'

function ProjectsBody(){

    return(
        <div className="ProjectsBody">
            <h1>Projects</h1>
            <AProject name="Portfolio Website" skills="JavaScript (ReactJS), HTML/CSS, GitHub, VS Code" 
                link="https://github.com/RogerBelman/Portfolio-Website.git" image={null}></AProject>
            <hr></hr>
            <AProject name="Utd Parking Availability App" skills="JavaScript, GitHub, VS Code" 
                link="" image={null}></AProject>
            <hr></hr>
            <AProject name="Dallas & Phoenix Arrests Data Analysis" skills="R, RStudio" 
                link="" image={null}></AProject>
        </div>
    );
}

export default ProjectsBody
