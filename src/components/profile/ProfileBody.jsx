import Socials from './Socials.jsx'
import Button from '../Button.jsx'
import './ProfileBody.css'

function ProfileBody(){

    return(
        <div className="ProfileBody">
            <h1>Roger Belman</h1>
            <h2>Software Engineering Graduate</h2>
            <div className="headshot-frame">
                <img src="/images/profile-preview.jpg" className="headshot" alt="Roger Belman"></img>
            </div>
            <p className="Intro">
                I am a <b>Software Engineering graduate</b> from the
                <b> University of Texas at Dallas</b> who enjoys building reliable, maintainable, and extendable software.
                I like writing code that is easy to understand, simple to update, and structured so projects can grow without becoming harder to work on.
                My work includes <b>React</b> websites, technical SEO, and VPS deployments that turn ideas into finished products.
            </p>
            <Socials></Socials>
            <div className="Resume">
                <div className="resume-placement">
                    <div className="resume-copy">
                        <h3>Resume</h3>
                        <p>View my latest resume as a PDF.</p>
                    </div>
                    <Button href="/Resume_Roger_Belman.pdf" target="_blank" text="View Resume"></Button>
                </div>
            </div>
        </div>
    );
}

export default ProfileBody
