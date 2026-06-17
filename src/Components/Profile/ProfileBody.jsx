import Socials from './Socials.jsx'
import Headshot from './Headshot.jsx'
import Resume from './Resume.jsx'
import './ProfileBody.css'

function ProfileBody(){

    return(
        <div className="ProfileBody">
            <h1>Roger Belman</h1>
            <h2>Software Engineering Student at The University of Texas at Dallas</h2>
            <Headshot></Headshot>
            <p className="Intro">Roger Belman is a
                <b> Software Engineering Student</b> at the
                <b> University of Texas at Dallas</b> building practical web applications with
                <b> React</b>, modern development tools, and hands-on deployment experience.
                Explore his projects, experience, resume, and contact links.
            </p>
            <Socials></Socials>
            <div className="Resume">
                <Resume></Resume>
            </div>
        </div>
    );
}

export default ProfileBody
