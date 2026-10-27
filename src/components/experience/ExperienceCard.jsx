import PropTypes from 'prop-types'
import Button from '../Button.jsx'
import './ExperienceCard.css'

function ExperienceCard(props){

    return(
        <div className="ExperienceCard ContentCard">
            <div className="experience-heading">
                <h2>{props.company}</h2>
                {props.period && <p className="content-details experience-details">{props.period}</p>}
                <h3>{props.position}</h3>
                <p className="experience-skills">{props.skills}</p>
            </div>
            <ul className="description-list" role="list">
                {props.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Button href={props.link} target="_blank" text="Visit Website"></Button>
        </div>
    );
}

ExperienceCard.propTypes = {
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    period: PropTypes.string,
    link: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ExperienceCard
