import PropTypes from 'prop-types'
import Button from '../Button'
import './AnExperience.css'

function AnExperience(props){

    const handleClick = () => {
        window.open(props.link, "_blank");
    };

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
            <Button handle={handleClick} text="Visit Their Website"></Button>
        </div>
    );
}

AnExperience.propTypes = {
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    skills: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
}

export default AnExperience
