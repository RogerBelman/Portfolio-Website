import PropTypes from 'prop-types'
import Button from '../Button'
import './AnExperience.css'

function AnExperience(props){

    return(
        <div className='AnExperience'>
            <h2>{props.company}</h2>
            <h3>{props.position}</h3>
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

AnExperience.propTypes = {
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AnExperience
