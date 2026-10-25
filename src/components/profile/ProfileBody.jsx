import Socials from './Socials.jsx'
import Button from '../Button.jsx'
import './ProfileBody.css'

const technicalSkills = [
    { label: 'Languages', skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C/C++', 'SQL', 'HTML/CSS', 'R'] },
    { label: 'Frontend', skills: ['React', 'React Router', 'Vite'] },
    { label: 'Backend & Data', skills: ['Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Neon', 'Flyway', 'REST APIs', 'JUnit', 'Mockito', 'MockMvc'] },
    { label: 'Tools/Platforms', skills: ['OpenAI Codex', 'Git', 'GitHub', 'Docker', 'Linux', 'WSL', 'Ubuntu', 'DigitalOcean', 'Nginx', 'VS Code', 'RStudio'] },
]

function ProfileBody(){

    return(
        <div className="ProfileBody">
            <h1>Roger Belman</h1>
            <h2>Software Developer</h2>
            <div className="headshot-frame">
                <img src="/images/profile-preview.jpg" className="headshot" alt="Roger Belman"></img>
            </div>
            <p className="Intro">
                I enjoy building practical software that solves everyday problems.
                I care about creating reliable, maintainable applications and thoughtful user experiences.
                Through my projects, I continue to learn, explore new ideas, and grow as a developer.
            </p>
            <Socials></Socials>
            <section className="technical-skills" aria-labelledby="technical-skills-heading">
                <h2 id="technical-skills-heading">Technical Skills</h2>
                <dl>
                    {technicalSkills.map(({ label, skills }) => (
                        <div className="skill-category" key={label}>
                            <dt>{label}</dt>
                            <dd>
                                <ul className="skill-list">
                                    {skills.map(skill => <li key={skill}>{skill}</li>)}
                                </ul>
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>
            <div className="Resume">
                <div className="resume-placement">
                    <div className="resume-copy">
                        <h2>Resume</h2>
                        <p>View my latest resume as a PDF.</p>
                    </div>
                    <Button href="/Resume_Roger_Belman.pdf" target="_blank" text="View Resume"></Button>
                </div>
            </div>
        </div>
    );
}

export default ProfileBody
