import SocialIcon from '../Profile/SocialIcon.jsx'
import GitHub from '/src/assets/GitHub.jpg'
import LinkedIn from '/src/assets/LinkedIn.png'
import './Socials.css'

function Socials(){

    return(
        <div className="socials-placement">
            <SocialIcon link="https://www.linkedin.com/in/roger-belman/" image={LinkedIn} name="LinkedIn"></SocialIcon>
            <SocialIcon link="https://github.com/RogerBelman" image={GitHub} name="GitHub"></SocialIcon>
        </div>
    );
}

export default Socials
