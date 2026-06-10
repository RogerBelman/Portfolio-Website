import PropTypes from 'prop-types'
import './Button.css'

function Button(props){

    if (props.href) {
        return(
            <a
                className="Button"
                href={props.href}
                target={props.target}
                rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
            >
                {props.text}
            </a>
        );
    }

    return(
        <button className="Button" onClick={props.handle}>{props.text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handle: PropTypes.func,
    href: PropTypes.string,
    target: PropTypes.string,
}

export default Button
