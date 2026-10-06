import PropTypes from 'prop-types'
import Button from '../Button.jsx'
import './ExperienceCard.css'

function ExperienceCard(props){

    return(
        <div className="ExperienceCard ContentCard">
            <h2>{props.company}</h2>
            <h3>{props.position}</h3>
            {(props.period || props.location) && (
                <p className="content-details">
                    {[props.period, props.location].filter(Boolean).join(' | ')}
                </p>
            )}
            <p className="grey">{props.skills}</p>
            <ul className="description-list white">
                {props.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <Button href={props.link} target="_blank" text="Visit Their Website"></Button>
        </div>
    );
}

ExperienceCard.propTypes = {
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    period: PropTypes.string,
    location: PropTypes.string,
    link: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ExperienceCard
