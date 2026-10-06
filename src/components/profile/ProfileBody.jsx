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
                <b> University of Texas at Dallas</b> who enjoys building reliable, maintainable software.
                I build full-stack applications with <b>Java, Spring Boot, React, TypeScript, and PostgreSQL</b>,
                including a workout tracker with a REST API, progress analytics, and backend tests.
                My work also includes production websites, technical SEO, and Ubuntu VPS deployments with Nginx and HTTPS.
            </p>
            <p className="education-details">
                Bachelor of Science in Software Engineering | May 2026 | GPA: 3.73/4.0
            </p>
            <Socials></Socials>
            <section className="technical-skills" aria-labelledby="technical-skills-heading">
                <h2 id="technical-skills-heading">Technical Skills</h2>
                <dl>
                    <div>
                        <dt>Languages</dt>
                        <dd>Java, TypeScript, JavaScript, Python, C/C++, SQL, HTML/CSS, R</dd>
                    </div>
                    <div>
                        <dt>Frontend</dt>
                        <dd>React, React Router, Vite</dd>
                    </div>
                    <div>
                        <dt>Backend &amp; Testing</dt>
                        <dd>Spring Boot, Spring Data JPA, PostgreSQL, Neon, Flyway, REST APIs, JUnit, Mockito, MockMvc</dd>
                    </div>
                    <div>
                        <dt>Tools &amp; Platforms</dt>
                        <dd>OpenAI Codex, Git, GitHub, Docker, Linux, WSL, Ubuntu, DigitalOcean, Nginx, VS Code, RStudio</dd>
                    </div>
                </dl>
            </section>
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
