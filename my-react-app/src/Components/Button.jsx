import PropTypes from 'prop-types'

function Button(props){

    const buttonStyles = {
        backgroundColor: "hsl(0, 0%, 0%)",
        fontFamily: "'Orbitron'",
        color: "hsl(0, 0%, 100%)",
        border: "4px solid hsl(0, 0%, 100%)",
        fontSize: "20px",
        width: "200px",
        cursor: "pointer",
        fontWeight: "bold",
    }

    return(
        <button style={buttonStyles} onClick={props.handle}>{props.text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    handle: PropTypes.func,
}

export default Button