import AProject from './AProject.jsx'
import './ProjectsBody.css'

function ProjectsBody(){

    return(
        <div className="ProjectsBody">
            <h1>Projects</h1>
            <AProject name="Portfolio Web App" skills="JavaScript (ReactJS), HTML/CSS, GitHub, VS Code" 
                link="/" image={null}></AProject>
            <hr></hr>
            <AProject name="Utd Parking Availability App" skills="HTML/CSS, JavaScript" 
                link="/" image={null}></AProject>
            <hr></hr>
            <AProject name="Dallas & Phoenix Arrests Data Analysis" skills="R, RStudio" 
                link="/" image={null}></AProject>
        </div>
    );
}

export default ProjectsBody
