import PropTypes from 'prop-types'
import Button from '../Button'

function SocialIcon(props){

    const styles = {
        display: "flex",
        width: "200px",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
    }

    const imgStyles = {
        width: "100px",
        height: "100px",
        cursor: "pointer",
    }

    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return(
        <div style={styles}>
            <img src={props.image} alt={props.name} style={imgStyles} onClick={handleClick}></img>
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
