import PropTypes from 'prop-types'
import './Button.css'

function Button(props){

    return(
        <button className="Button" onClick={props.handle}>{props.text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    handle: PropTypes.func,
}

export default Button