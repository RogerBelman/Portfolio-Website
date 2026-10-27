import Socials from './Socials.jsx'
import Button from '../Button.jsx'
import './ProfileBody.css'

const technicalSkills = [
    { label: 'Languages', skills: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C/C++', 'SQL', 'HTML/CSS', 'R'] },
    { label: 'Frontend', skills: ['React', 'React Router', 'Vite'] },
    { label: 'Backend & Data', skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'REST APIs'] },
    { label: 'Testing', skills: ['JUnit', 'Mockito', 'MockMvc', 'Vitest', 'React Testing Library'] },
    { label: 'Tools/Platforms', skills: ['Git', 'GitHub Actions', 'Docker Compose', 'Linux', 'DigitalOcean', 'Nginx'] },
]

function ProfileBody(){

    return(
        <div className="ProfileBody">
            <section className="profile-introduction" aria-labelledby="profile-heading">
                <div className="headshot-frame">
                    <img src="/images/profile-preview.jpg" className="headshot" alt="Roger Belman"></img>
                </div>
                <div className="profile-copy">
                    <h1 id="profile-heading">Roger Belman</h1>
                    <h2 className="profile-role">Software Developer</h2>
                    <p className="profile-intro">
                        I build full-stack applications and responsive websites, with a focus on
                        reliable software and clear user experiences.
                    </p>
                    <div className="profile-actions">
                        <Socials></Socials>
                        <Button href="/Resume_Roger_Belman.pdf" target="_blank" text="View Resume"></Button>
                    </div>
                </div>
            </section>
            <section className="technical-skills" aria-labelledby="technical-skills-heading">
                <h2 id="technical-skills-heading">Technical Skills</h2>
                <div className="skill-grid">
                    {technicalSkills.map(({ label, skills }) => (
                        <div className="skill-category" key={label}>
                            <h3>{label}</h3>
                            <div className="skill-items">
                                <ul className="skill-list">
                                    {skills.map(skill => <li key={skill}>{skill}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProfileBody
