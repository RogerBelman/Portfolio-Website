import PropTypes from 'prop-types'
import Button from '../Button'
import './ProjectCard.css'

function ProjectCard(props){

    return(
        <div className="ProjectCard">
            <h2>{props.name}</h2>
            <h3>{props.skills}</h3>
            <ul className="description-list">
                {props.description.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            {props.image && <img className="Image" src={props.image} alt={props.name} />}
            {props.link && <Button href={props.link} target="_blank" text="GitHub Link"></Button>}
        </div>
    );
}

ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string,
    skills: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ProjectCard
