import Socials from './Socials.jsx'
import Headshot from './Headshot.jsx'
import Resume from './Resume.jsx'
import './ProfileBody.css'

function ProfileBody(){

    return(
        <div className="ProfileBody">
            <h2>Welcome To My Portfolio Website Built Using React</h2>
            <h1>Profile</h1>
            <Headshot></Headshot>
            <p className="Intro">Hi, I'm Roger Belman! I'm a passionate
                <b> software engineering student</b> at the
                <b> University of Texas at Dallas</b>, looking to expand my
                <b> software development skills</b>. Feel free to explore my projects, learn more about my experiences, or get in touch.
            </p>
            <Socials></Socials>
            <div className="Resume">
                <Resume></Resume>
            </div>
        </div>
    );
}

export default ProfileBody
