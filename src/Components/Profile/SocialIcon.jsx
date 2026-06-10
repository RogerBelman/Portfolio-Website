import PropTypes from 'prop-types'
import './SocialIcon.css'

function SocialIcon(props){

    return(
        <div className="icon-placement">
            <a className="social-link" href={props.link} target="_blank" rel="noopener noreferrer" aria-label={props.name}>
                <img src={props.image} alt={props.name} className="img-style"></img>
            </a>
        </div>
    );
}

SocialIcon.propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default SocialIcon
