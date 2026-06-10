import Header from '../Components/Header.jsx'
import ExperienceBody from '../Components/Experience/ExperienceBody.jsx'
import Footer from '../Components/Footer.jsx'
import SEO from '../Components/SEO.jsx'

function Experience(){

    return(
        <>
            <SEO
                title="Experience"
                description="Review Roger Belman's work experience, skills, and professional background."
                path="/experience"
            />
            <Header></Header>
            <ExperienceBody></ExperienceBody>
            <Footer></Footer>
        </>
    );
}

export default Experience
