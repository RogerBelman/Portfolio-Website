import SocialIcon from './SocialIcon.jsx'
import GitHub from '../assets/GitHub.jpg'
import LinkedIn from '../assets/LinkedIn.png'

function Socials(){

    const styles = {
        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyContent: "center",
    }

    return(
        <div style={styles}> 
            <SocialIcon link="https://www.linkedin.com/in/roger-belman/" image={LinkedIn} name="LinkedIn"></SocialIcon>
            <SocialIcon link="https://github.com/RogerBelman" image={GitHub} name="GitHub"></SocialIcon>
        </div>

    );
}

export default Socials
