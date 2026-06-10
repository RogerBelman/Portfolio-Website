import Header from '../Components/Header.jsx'
import ProjectsBody from '../Components/Projects/ProjectsBody.jsx'
import Footer from '../Components/Footer.jsx'
import SEO from '../Components/SEO.jsx'

function Projects(){

    return(
        <>
            <SEO
                title="Projects"
                description="Explore software engineering projects by Roger Belman, including React, deployment, and portfolio development work."
                path="/projects"
            />
            <Header></Header>
            <ProjectsBody></ProjectsBody>
            <Footer></Footer>
        </>
    );
}

export default Projects
