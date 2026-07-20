import experiences from '../../data/experiences.js'
import ExperienceCard from './ExperienceCard.jsx'

function ExperienceBody(){

    return(
        <div className="ExperienceBody ListPage">
            <h1>Experience</h1>
            {experiences.map((experience) => (
                <ExperienceCard key={experience.company} {...experience} />
            ))}
        </div>
    );
}

export default ExperienceBody
