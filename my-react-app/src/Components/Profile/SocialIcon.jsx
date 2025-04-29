import PropTypes from 'prop-types'
import Button from '../Button'
import './SocialIcon.css'

function SocialIcon(props){

    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return(
        <div className="icon-placement">
            <img src={props.image} alt={props.name} className="img-style" onClick={handleClick}></img>
            <Button handle={handleClick} text={"Visit " + props.name}></Button>
        </div>
    );
}

SocialIcon.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
}

export default SocialIcon
