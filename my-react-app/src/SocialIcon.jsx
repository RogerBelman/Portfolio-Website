import PropTypes from 'prop-types'

function SocialIcon(props){

    const styles = {
        display: "flex",
        width: "150px",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px"
    }

    const imgStyles = {
        width: "100px",
        height: "100px",
    }

    const buttonStyles = {
        backgroundColor: "hsl(0, 0%, 0%)",
        fontFamily: "'Orbitron'",
        color: "hsl(0, 0%, 100%)",
        border: "2px solid hsl(0, 0%, 100%)",
        fontSize: "18px",
        width: "150px",
    }

    const handleClick = () => {
        window.open(props.link, "_blank");
    };

    return(
        <div style={styles}>
            <img src={props.image} alt={props.name} style={imgStyles} onClick={handleClick}></img>
            <button style={buttonStyles} onClick={handleClick}>Visit {props.name}</button>
        </div>
        
    );
}

SocialIcon.propTypes = {
    link: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
}

export default SocialIcon