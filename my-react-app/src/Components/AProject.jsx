import PropTypes from 'prop-types'
import Button from './Button'
import './AProject.css'

function AProject(props){

    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return(
        <div className="AProject">
            <h2>{props.name}</h2>
            <h3>{props.skills}</h3>
            {props.image && <img className="Image" src={props.image} alt={props.name} />}
            <Button handle={handleClick} text="GitHub Link"></Button>
        </div>
    );
}

AProject.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    skills: PropTypes.string,
}

export default AProject
