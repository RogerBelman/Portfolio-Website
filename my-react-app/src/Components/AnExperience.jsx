import PropTypes from 'prop-types'
import Button from './Button'
import './AnExperience.css'

function AnExperience(props){

    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return(
        <div className='AnExperience'>
            <h2>{props.company}</h2>
            <h3>{props.position}</h3>
            <p>{props.skills}</p>        
            <Button handle={handleClick} text="Visit Their Website"></Button>
        </div>
    );
}

AnExperience.propTypes = {
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    skills: PropTypes.string,
}

export default AnExperience
