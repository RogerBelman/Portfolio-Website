import { Fragment } from 'react'
import experiences from '../../data/experiences.js'
import AnExperience from './AnExperience'
import './ExperienceBody.css'

function ExperienceBody(){

    return(
        <div className="ExperienceBody">
            <h1>Experience</h1>
            {experiences.map((experience, index) => (
                <Fragment key={experience.company}>
                    <AnExperience {...experience} />
                    {index < experiences.length - 1 && <hr />}
                </Fragment>
            ))}
        </div>
    );
}

export default ExperienceBody
