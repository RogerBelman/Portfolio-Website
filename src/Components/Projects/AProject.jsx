import PropTypes from 'prop-types'
import Button from '../Button'
import './AProject.css'

function AProject(props){

    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return(
        <div className="AProject">
            <h2>{props.name}</h2>
            <h3>{props.skills}</h3>
            <ul className="description-list">
                {props.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            {props.image && <img className="Image" src={props.image} alt={props.name} />}
            {props.link != "" && <Button handle={handleClick} text="GitHub Link"></Button>}
        </div>
    );
}

AProject.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    skills: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
}

export default AProject
