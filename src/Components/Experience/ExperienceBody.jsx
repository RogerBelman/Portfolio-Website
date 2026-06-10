import experiences from '../../data/experiences.js'
import AnExperience from './AnExperience'
import './ExperienceBody.css'

function ExperienceBody(){

    return(
        <div className="ExperienceBody">
            <h1>Experience</h1>
            {experiences.map((experience) => (
                <AnExperience key={experience.company} {...experience} />
            ))}
        </div>
    );
}

export default ExperienceBody
